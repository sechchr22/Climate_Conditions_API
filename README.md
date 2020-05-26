# CLIMATE CONDITIONS API

API to get climate conditions from anywhere!

Core Functionality:
  - Getting climates conditions from a indexed place
  - Save each request in logs

## Enviroment

The needed environment is defined into the Dockerfile, you just have to create the container with it (see instructions on "installation") :)

## Installation
Clone the repository
```sh
git clone https://github.com/sechchr22/Climate_Conditions_API
```
Build the container
```sh
sudo docker build -t climate_conditions_api:latest
```

## RUN

Run the container
```sh
sudo docker run -it climate_conditions_api bash
```
Run MongoDB server
```sh
mongod
```
Open a new terminal and run 
```sh
sudo docker exec -it <container_id> bash
```
Everything is ready you can go
```sh
./main.js <place>
```
## FILE STRUCTURE

### Folder: modules
| File | Description |
| ------ | ------ |
| coordinates.js | Getting coordinates from MapBox API |
| climate_conditions.js | Getting climate conditions from DarkSky API |
| get_ip.js | Getting client's ip |
| main.js | main |

# Development
Sergio Andrés Rueda Castro
Backend engineer

##### Contact me:
https://www.linkedin.com/in/sergio-rueda-backend-dev/
https://twitter.com/sechchr


License
----
**Free Software, Hell Yeah!**
