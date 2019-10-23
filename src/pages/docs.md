---
templateKey: extra-page
slug: docs
title: API documentation
---
Any questions? <a class="intercom" href>Use the chat</a>

+ [Methods](#Methods)
  - [GetFeesByWaypointList](#GetFeesByWaypointList)
  - [GetFeesByWaypoints](#GetFeesByWaypoints)
  - [FindRouteDescriptions](#FindRouteDescriptions)

+ [Request](#Request)
   - [Waypointlist](#Waypointlist)
   - [Fra](#Fra) | [Til](#Til) | [Vialiste](#Vialiste)
   - [Dato](#Dato) | [Tidspunkt](#Tidspunkt) | [Bilsize](#Bilsize) | [Litenbiltype](#Litenbiltype) | [Storbiltype](#Storbiltype) | [Billengdeunder](#Billengdeunder) | [Retur](#Retur) | [Tidsreferanser](#Tidsreferanser)

+ [Response](#Response)


# Methods <a name="Methods"></a>

## GetFeesByWaypointList <a name="GetFeesByWaypointList"></a>

```
POST /api/bomstasjoner/GetFeesByWaypointList
```
Most commonly used by autologs and travel apps that record waypoints on the route. You post a list of waypoints of the actual trip, and the API returns toll roads and ferries along the route.

```
{
   	"Waypointlist":[
			{ "Latitude":59.89087, "Longitude":10.52782, "Time":0 },
			{ "Latitude":59.89085, "Longitude":10.52779, "Time":5 },
			{….},
			{ "Latitude":59.89077, "Longitude":10.52765, "Time":10 }
	],
	"Dato_yyyymmdd":"20190620",
	"Tidspunkt_hhmm":"1600",
	"Bilsize":"1",
	"Litenbiltype":"1",
	"Storbiltype":"0",
	"Billengdeunder":"5.0",
	"Retur":"0",
	"Tidsreferanser":"1"

```


## GetFeesByWaypoints <a name="GetFeesByWaypoints"></a>

```
POST /api/bomstasjoner/GetFeesByWaypoints
```

This method is used when you only have To/From (and optional via waypoints). We use the Google Maps API to calculate the route. Instead of [WaypointList](#WaypointList) you use [Fra](#Fra) and [Til](#Til) and the optional [Vialiste](#Vialiste). This method is used by some apps for travel expenses.

* If you only use "Fra" and "Til" you will get 3 alternative routes back from the API.
* If you include "Vialiste" with at least one string, you only get one route back from the API

```
{ 
	"Fra":{ 
		"Latitude": "59.908987", "Longitude": "10.640620" 
	}, 
	"Til":{
		"Latitude": "60.081021", "Longitude": "11.133150" 
	}, 
	"Vialiste":[ 
		{"Latitude": "59.996816", "Longitude": "11.039453" } 
	], 
	"Dato_yyyymmdd":"20190528", 
	"Tidspunkt_hhmm":"1701", 
	"Bilsize":1, 
	"Litenbiltype":1, 
	"Storbiltype":0, 
	"Billengdeunder":"5.0", 
	"Retur":"0", 
	"Tidsreferanser":"1" 
}
```

## FindRouteDescriptions <a name="FindRouteDescriptions"></a>

```
POST/api/bomstasjoner/findRouteDescriptions
```
You can use this method if you do not have any geocoordinates, and only Places/ID.

```
{ 
	"Fra":{
		"Name":"Sandvika", "Id":"ChIJTU-0pl0TQUYRg740Tr__OzE" 
	}, 
	"Til":{
		"Name":"Hamar", "Id":"ChIJl6PJawbhQUYRUNsr84FBMag" 
	}, 
	"Vialiste":[ 
		{"Name":"Eidsvoll", "Id":"ChIJH2JzAviLQUYROwtnTnGQ1gg" }, 
		{"Name":"Ridabu", "Id":"ChIJR_pG5cfjQUYRjI6AxLWGnvk" }
	], 
	"Dato_yyyymmdd":"20190312", 
	"Tidspunkt_hhmm":"1201", 
	"Bilsize":1, 
	"Litenbiltype":1, 
	"Storbiltype":0, 
	"Billengdeunder":"5.9", 
	"Retur":"0", 
	"Tidsreferanser":"0" 
}
```



# Request <a name="Request"></a>

## Waypointlist <a name="Waypointlist"></a>

Used in the method [GetFeesByWaypointList](#GetFeesByWaypointList)

List of waypoints in geo-coordinates. Every waypoint also have a time parameter in seconds from the start time (Tidspunkt_hhmm/time_hhmm). If some of the time values are empty we will try to fill the gaps based on the values in front and back.
```
{
   	"Waypointlist":[
			{ "Latitude":59.89087, "Longitude":10.52782, "Time":0 },
			{ "Latitude":59.89085, "Longitude":10.52779, "Time":5 },
			{….},
			{ "Latitude":59.89077, "Longitude":10.52765, "Time":10 }
	],
```

## Fra <a name="Fra"></a>
Used in the method [GetFeesByWaypoints](#GetFeesByWaypoints):

```
"Fra":{ 
		"Latitude": "59.908987", "Longitude": "10.640620" 
	}, 
```

## Til <a name="Til"></a>
Used in the method [GetFeesByWaypoints](#GetFeesByWaypoints):

```
"Til":{
	"Latitude": "60.081021", "Longitude": "11.133150" 
	}, 
```



## Vialiste <a name="Vialiste"></a>
Used in the method [GetFeesByWaypoints](#GetFeesByWaypoints):

```
"Vialiste":[ 
		{"Latitude": "59.996816", "Longitude": "11.039453" } 
```


## Dato <a name="Dato"></a>
By specifying a date you can search within current, historical and future fees. Empty string or non-existing parameter will be replaced with todays date.
```
"Dato_yyyymmdd":"20190620",
```

## Tidspunkt <a name="Tidspunkt"></a>
By specifying a specific time we will calculate the time around the route and calculate any started or ended rush hour periods. With an empty or none-existing parameter we  will set the time to 00:00.
```
"Tidspunkt_hhmm":"1600",
```

## Bilsize <a name="Bilsize"></a>
Type of vehicle together with the parameters "Litenbiltype" and "Storbiltype" will determine the fees. Se values below:

* 0 = NULL
* 1 = Small car (<3500t). Note! "Storbiltype" must be 0 (null)
* 2 = Big car/Truck (>3500t) Note! "Litenbiltype" must be 0 (null)
* 3 = MC (motorcycle) Note! "Storbiltype" and "Litenbiltype must be 0 (null)

```
"Bilsize":"1",
````

## Litenbiltype <a name="Litenbiltype"></a>
* 0 = NULL
* 1 = Bensin (gasoline)
* 2 = Diesel
* 3 = Elbil (electric)
* 4 = LadbarHybrid (Chargable hybrid)
* 5 = Hydrogen

```
"Litenbiltype":"1",
```

## Storbiltype <a name="Storbiltype"></a>
* 0 = NULL
* 1 = EuroVI
* 2 = EUROV
* 3 = Elbil (electric)
* 4 = LadbarHybrid (Chargable hybrid)

```
"Storbiltype":"0",
```

## Billengdeunder <a name="Billengdeunder"></a>
For calculating ferry prices. Normal length small car is 5 m(less than 6)
Normal length big car is 9m (between 8 and under 10)

```
"Billengdeunder":"5.0",
```

## Retur <a name="Retur"></a>
This value is set to also calculate return fees. Value:

* 0 = One way
* 1 = Both ways

```
"Retur":"0",
```

## Tidsreferanser <a name="Tidsreferanser"></a>
This parameter, typically set to 1 has the following values:

* 0 = no calculations for time along the route and no considerations for rush hour considerations.
* 1 = calculations for time along the route and will consider the time spent reaching the fee points and the fees returned.

```
"Tidsreferanser":"1"
```

# Response <a name="Response"></a>

```
{
  "Tur": [																			
    {
      "Name": "E39",															
      "DistanseNice": "83 km",
      "TidNice": "1 time 58 min",
      "KostnadNice": "501,00 kr.",
      "RabattertNice": "336,80 kr.",
      "Meters": 83299,
      "Seconds": 7109,
      "Kostnad": 501.0,
      "Rabattert": 336.8,
      "listPolylinePointsEncoded": [
        "{dsiJ}xc_@BCt@cA\\c@^e@V]Xa@`@q@`@s@Zg@LSNU",
        "eo|fJk`_b@GPERCH?BAFGVIZGXIZEX"
      ],
      "AvgiftsPunkter": [
        {
          "Navn": "Karmsundsgata",
          "Vegnr": "Fv47",
          "Latitude": "59.39918",
          "Longitude": "5.29372",
          "Retning": "SØ",
          "Punktradius": "10",
          "Timesregel": true,
          "Lokalrabatt": "0",
          "Autopassrabatt": "20",
          "LNullutslipprabatt": "60",
          "SNullutslipprabatt": "",
          "Mndtak": "75",
          "Informasjon": "",
          "Bomselskapurl": "http://www.haugalandspakken.no/takster/",
          "Autopass": true,
          "Kommune": "Haugesund",
          "Passeringstid_Est": "",
          "TimesregelNavn": "",
          "Avgifter": [
            {
              "Feetype": "bompenger",
              "Vehicletype": "kjøretøy under 3500 kg",
              "Sizetype": "",
              "Sizetypename": "",
              "Rushstart": "",
              "Rushstop": "",
              "RushtidsInfo": "",
              "Pris": 11.0,
              "PrisRabbattert": 8.8,
              "PrisNice": "11,00 kr.",
              "PrisRabbatertNice": "8,80 kr.",
              "Informasjon": "",
              "Vehicle_type_id": "l",
              "Size_type_id": "",
              "Feetype_id": "bp",
              "Rushperiod_id": ""
            }
          ]
        },
      ]
    }
  ]
  "Retur": [
...................
```

See explanations below. Any questions? <a class="intercom" href>Use the chat</a>

```
"Tur":
//Trip

"Name": "string",
//Name of trip

"DistanseNice": "string",
//Distance in ui format

"TidNice": "string",
//Timeusage in ui format

"KostnadNice": "string",
//Full price(no autopass) in ui format

"RabattertNice": "string",
//Discounted price(autopass) in ui format

"Meters": number,
//Distance in metric meters

"Seconds": number,
//Timeusage in seconds since

"Kostnad": number,
//Full price (no Autopass)

"Rabattert": number, 
//Discounted price (Autopass)

"listPolylinePointsEncoded":
//The google route in encoded plyline format (if used)
 
"AvgiftsPunkter":
//Toll station

"Navn": "string",
//Name of toll station

"Vegnr": "string",
//Name of road

"Latitude": "string",
//Latitude coordinate

"Longitude": "string",
//Longitude coordinate

"Retning": "string",
//Direction of toll collection

"Punktradius": "string",
//Detection radius in metric meters

"Timesregel": boolean,
//One hour rule in play

"Lokalrabatt": "string",
//Local discount --not in use for autopass

"Autopassrabatt": "string",
//Autopass discount percentage

"LNullutslipprabatt": "string",
//Autopass discount percentage
(small < 3500 kg - zero emissions)

"SNullutslipprabatt": "string",
//Autopass discount percentage
(large >3500kg - zero emissions)

"Mndtak": "string",
//Max amount of toll collection pr. month

"Informasjon": "string",
//DIBkunnskap information about the tollstation

"Bomselskapurl": "string",
//The url of the Toll company

"Autopass": boolean,
//Toll station supports autopass

"Kommune": "string",
//The municipality the toll station recides in

"Passeringstid_Est": "string",
//If used in input parameter we estimate the time
passing the toll station (hhmm)

"TimesregelNavn": "string",
//Name of the toll ring the toll station belongs to

"Avgifter":
//Fees

"Feetype": "string",
//Explained text for Feetype_id

"Vehicletype": "string",
//Explained text for Vehicle_type_id

"Sizetype": "string",
//Explained text for Size_type_id

"Sizetypename": "string",
//Sizetypename --> "lengde" == length

"Rushstart": "string",
//Start of rush hour yyyy-mm-ddThh:mm:ss, if it applies

"Rushstop": "string",
//End of rush hour yyyy-mm-ddThh:mm:ss, if it applies

"RushtidsInfo": "string",
//DIBkunnskap information of rushour

"Pris": number,
//The fee price

"PrisRabbattert": number,
//The fee price discounted

"PrisNice": "string",
//The fee price for ui

"PrisRabbatertNice": "string",
//The fee price discounted for ui

"Informasjon": "string",
//DIBkunnskap information for fee

"Vehicle_type_id": "string",
//Vehicletype (na="not applicable eg.  ferry ticket", 
s="small<3500kg", l="large>3500kg",b="gasoline",d="diesel",
lnu="small electric/zero emissions",
snu="large electric/zero emissions",h="hydrogen",
eV="euroV and older",eVI="euroVI and newer",
lhyd="small<3500kg hybrid", slhyb="large>3500kg hybrid",
lhyb="small>3500kg rechargeable hybrid",
llhyb="large>3500kg rechargeable hybrid", mc="motor cycle")

"Size_type_id": "string",
//Sizetype, na or length classification for vehicle, typically on ferry

"Feetype_id": "string",
//Feetypeid (fb=ferry, bp=toll fee)

"Rushperiod_id": "string"
//Id for rushperiod

"Retur":
//Return trip, if retur is set to 1 in input parameters
