# Petición get:

1. localhost:3000 

    - query: -
    - body: -
    - Respuesta: ```json {"error": true,"code": 200,"message": "Debes proporcionar un nombre"}```
2. localhost:3000?name=Javi

    - query: id=Javi
    - body: -
    - Respuesta: ``` {"error": false,"code": 200,"message": "Nombre proporcionado","data": "Javi"} ```

# Petición POST

1. localhost:3000 

    - query: -
    - body: 
    ```json 
    {
        "name": "Javier",
        "surname": "de la Torre", 
        "age": 37} 
    ```
    - Respuesta:     
    ```json 
    {"error": false,
    "code": 200,
    "message": "Datos correctos",
    "data": {
        "name": "Javi",
        "surname": "de la Torre",
        "age": 37
        }   
    }
    ```
2. localhost:3000 

    - query: -
    - body: 
    ```json 
    {
        "surname": "de la Torre", 
        "age": 37} 
    ```
    - Respuesta:     
    ```json 
   {
    "error": true,
    "code": 200,
    "message": "Debes introducir todos los datos"
}