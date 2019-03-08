# Report on the work done

## Occurred issues

#### One-way data flow
The most part of occurred issues was related to data flow in the app. Since I wasn't familiar with Flux architecture so I didn't know how to organize one-way data flow in the app. Of course, I  found out a basic of Redux and tried to do my best to keep all data flow in only one direction. For the current moment, the app contains plenty of boilerplates related to actions and reducers. 
#### The right way to handle requests
Also, I have to mention that I did not figure out how to manage request objects in the app. I couldn't find a nice solution to deal with the issue. There are a lot of hardcode request objects in the app.
#### Data sorting
Another point which I'd like to mention is table columns sorting. I'd say it looks a little bit strange particularly influence of sorting field on a request object (I mean a process where a click by a header column of a table component influences on order param in a request object).

## Possible improvements
Since I did not have enough time to completely finish the task. It would be nice to refactor several components and the project structure.

#### UI improvements:

I'd like to improve the currencies selector component. First of all, need to add functionality that gives an ability to search by cryptocurrency's name. Cause 200 cryptocurrencies in a list it is a lot.
A second possible improvement is removed items from a list which had been already selected. 
A third improvement must be errors handling. For current moment requests errors aren't handled at all.

#### Business logic improvements:

I'd like to improve the data architecture. Since Redux store isn't clear for this app and it's quite difficult to figure out how data is passing throw in the app.
Also, the data updating process has to be improved
