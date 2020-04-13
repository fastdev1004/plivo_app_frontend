# Plivo Messaging App
This application usings Plivo's messaging APIs to send and receive text messages from a host web application.

## Frontend
#### Repo: https://github.com/gwhitlock8/plivo_app_frontend
### Technologies:
Built using **create-react-app**: https://www.npmjs.com/package/create-react-app
- React: https://www.npmjs.com/package/react
- React DOM: https://www.npmjs.com/package/react-dom
- Boostrap React: https://www.npmjs.com/package/react-bootstrap
- ActionCable: https://www.npmjs.com/package/actioncable
- Axios: https://www.npmjs.com/package/axios
- Plivo: https://www.npmjs.com/package/plivo

## Backend
#### Repo: https://github.com/gwhitlock8/plivo_app_backend
### Technologies:
- Ruby on Rails: https://rubyonrails.org/
- Plivo: https://rubygems.org/gems/plivo
- Active Model Serializers: https://rubygems.org/gems/active_model_serializers
- Phonelib: https://rubygems.org/gems/phonelib

### Other Technologies:
- ngrok: https://ngrok.com/

## Setup Instructions

After cloning both the front and backend repos, please follow the steps listed below to get the application up and running:
1. Create Plivo trial account at https://www.plivo.com/ and follow the instructions after clicking the ***Get Started*** button.
2.  From the terminal, navigate to the root directory of the backend repo and run the following command:
```
bundle install
```
3. Create a ***.env*** file in the backend root directory and enter the your Plivo variables, using the following format:
```
export PLIVO_AUTH_ID=
export PLIVO_AUTH_TOKEN=
export PLIVO_PHONE_NUMBER=
```

4. In the terminal, type the following command (you will need to have [ngrok](https://ngrok.com/download) installed):
```
ngrok http 3001
```
This will create a tunnel to your local host on port 3001. Grab the URL from the terminal (***sans http://***) and paste the following before the last *end* of your config/environments/development.rb file:
```
config.hosts << "[NGROK URL]"
```
5. Navigate to the Plivo dashboard and create a new XML application, linking it to your Plivo phone number. Within the application, paste the ngrok URL in the Message URL field, ensuring that POST is selected in the dropdown. The URL should look similar to this: ***http://c80bd249.ngrok.io/webhooks/plivo***

6. Create and migrate the database then start your server by running the following in the root folder of the app backend:
```
rails db:create
rails db:migrate
rails s -p 3001
```
>The *-p* flag starts the server on port 3001

7. Now navigate to the root folder of the frontend repo and run:
```
npm install
npm run start
```

