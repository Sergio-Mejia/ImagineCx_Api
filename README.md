# RESTServer ImagineCx

* Ejecutar ```npm install``` para reconstruir los módulos de Node

* Crear archivo ```.env``` para poner las variables de entorno que se encuentran en ```example.env```

* Para ejecutar la aplicación, en una terminal escribir el comando ```node app.js``` o ```npm run start```

## EndPoitns
### Contacts
* **GET**
  * ``server/api/imaginecx/contacts``: Mostrar todos los contactos registrados
  * ``server/api/imaginecx/contacts/{id}``: Mostrar información del contacto especificado
* **PATCH**
  * ``server/api/imaginecx/contact/{id}``: Actualizar los datos del contacto con el Id solicitado. Los datos se envían a través de un JSON, por ejemplo:
    * ```{"city":"Boston", "postalCode": "02150", "street": "123 Beacon Street"}```
* **DELETE**:
  * ``server/api/imaginecx/contact/{id}``: Eliminar contacto con el identificador dado

### Accounts
* **GET**
  * ``server/api/imaginecx/accounts``: Mostrar todas las cuentas registradas
  * ``server/api/imaginecx/accounts/{id}``: Mostrar información de la cuenta especificada en el id
* **PATCH**
  * ``server/api/imaginecx/accounts/{id}``: Actualizar los datos de la cuenta con el Id solicitado. Los datos se envían a través de un JSON, por ejemplo:
    * ```{"login": "test2"}```
* **DELETE**:
  * ``server/api/imaginecx/accounts/{id}``: Eliminar la cuenta del identificador dado

### Incidents
* **GET**
  * ``server/api/imaginecx/incidents``: Mostrar todos los incidentes registrados
  * ``server/api/imaginecx/incidents/{id}``: Mostrar información del incidente especificado en el id
* **PATCH**
  * ``server/api/imaginecx/incidents/{id}``: Actualizar los datos del incidente con el Id dado. Los datos se envían a traves de un JSON, por ejemplo:
    * ```{"subject": "FishPhone STILL not working"}```
* **DELETE**:
  * ``server/api/imaginecx/incidents/{id}``: Eliminar el incidente del identificador dado

### Organizations
* **GET**
  * ``server/api/imaginecx/organizations``: Mostrar todas las organizaciones registradas
  * ``server/api/imaginecx/organizations/{id}``: Mostrar información de la organización especificada en el id
* **PATCH**
  * ``server/api/imaginecx/organizations/{id}``: Actualizar los datos de la organización con el Id dado. Los datos del body se envían a través de un JSON, por ejemplo:
    * ```{"name": "Oracle Corporation"}```
* **DELETE**:
  * ``server/api/imaginecx/organizations/{id}``: Eliminar la organización del identificador dado

### AssetStatus
* **GET**
  * ``server/api/imaginecx/assetStatuses``: Mostrar todas las AssetStatus registrados
  * ``server/api/imaginecx/assetStatuses/{id}``: Mostrar información del AssetStatus especificado en el id

### Campaigns
* **GET**
  * ``server/api/imaginecx/campaigns``: Mostrar todas las campañas registradas
  * ``server/api/imaginecx/campaigns/{id}``: Mostrar información de la Campaña especificada en el id

### Channel Types
* **GET**
  * ``server/api/imaginecx/channelTypes``: Mostrar todos los canales registradas
  * ``server/api/imaginecx/channelTypes/{id}``: Mostrar información del canal especificado en el id

### MessageBases
* **GET**
  * ``server/api/imaginecx/messageBases``: Mostrar todos los mensajes registrados
  * ``server/api/imaginecx/messageBases/{id}``: Mostrar información del mensaje especificado en el id

### Analytics Reports
* **GET**
  * ``server/api/imaginecx/analyticsReports``: Mostrar todos los reportes registrados
  * ``server/api/imaginecx/analyticsReports/{id}``: Mostrar información del reporte especificado en el id
