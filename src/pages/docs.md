---
templateKey: extra-page
slug: docs
title: API documentation
---

# TABLE OF CONTENTS

+ METHODS
  - [GetFeesByWaypointList](#GetFeesByWaypointList)
  - [GetFeesByWaypoints](#GetFeesByWaypoints)
  - [FindRouteDescriptions] (#FindRouteDescriptions)

+ REQUEST
   - [Waypointlist](#Waypointlist)
   - [Fra](#Fra)
   - [Til](#Til)
   - [Vialiste](#Vialiste)
   - [Dato](#Dato)
   - [Tidspunkt](#Tidspunkt)
   - [Bilsize](#Bilsize)
   - [Litenbiltype](#Litenbiltype)
   - [Storbiltype](#Storbiltype)
   - [Billengdeunder](#Billengdeunder)
   - [Retur](#Retur)
   - [Tidsreferanser](#Tidsreferanser)

+ RESPONSE



# METHODS

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



# POST PARAMETERS

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

# 
