#Rspectacle Front End

##Credits
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
- @heretoeternity
- @sambok
- @sbrady11

## Specs
This project requires the revlevant backend, found [here] (https://github.com/OG-Hawks/rspectacle-railsAPI)
  -ActionCable: 5.1.4,
  -React: 15.6.2,
  -React-Dom: 15.6.2,
  -React-Modal: 2.3.2,
  -React-Scripts: 1.0.14,
  -React-Skylight: 0.5.0

## Installation
To run locally, download and install the relevant [backend](https://github.com/OG-Hawks/rspectacle-railsAPI)

1. `npm install`

2. `npm start`

## User Story
The user, after logging onto Rspectacle, can write an RSpec test in the left hand entry-field. Once complete, the user clicks 'SUBMIT', and the entry is saved to the backend. Next, the user can write a Ruby method in the right most entry-field that passes the RSpec test. The user clicks the 'SUBMIT' button underneath the relevant field, then selects 'RUN'. The results of the freshly created RSpec test are then displayed to the console, along with the relevant passing or failing messages. In order to write a new test, simply resubmit the relevant fields. The session is not restricted to one user. Two users can easily write and share tests and code using RSpectacle. 
