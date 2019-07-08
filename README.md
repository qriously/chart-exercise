# Qriously Chart Exercise

## Overview

Every day at Qriously we conduct large numbers of surveys all around the world. In order to help our clients make sense of the data from these surveys, we are building tools to allow them to both visualise and interact with survey data.

We would like you to build an *interactive* chart for visualising some survey results. We would like to have the ability to apply filters to the chart (e.g. only displaying results according to the answer demographics).

Please see below for further detailed instructions to guide your submission.

## Instructions

1. Create a [duplicate of this repository](https://help.github.com/en/articles/duplicating-a-repository.) 
(*please do not fork this repo because you cannot restrict access to a forked public repository*).
    ```
    $ git clone --bare https://github.com/qriously/chart-exercise.git
    $ cd chart-exercise.git
    $ git push --mirror https://github.com/exampleuser/chart-exercise.git
    $ cd .. 
    $ rm -rf chart-exercise.git
    ```

1. [Mark the repository as private in Github](https://help.github.com/en/articles/setting-repository-visibility#making-a-repository-private).

1. Implement your interactive charting functionality.

1. Include any instructions (or other useful comments) in a clearly marked text file.

1. Commit your changes to your local branch then push to the remote repository.

1. Add the users **pc256** and **MacleanS** as [collaborators to the repository](https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository).

1. Drop us an email letting us know you've finished.

## Other Useful Information 

To assist you we have provided an endpoint which you can call to return the survey data. This can be run in the terminal as follows ...

    $ node src/server/app.js
    
You can then submit a request to the end-point and receive some survey data back ...

    $ curl -I -X GET localhost:3456/survey
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 1100287
    ETag: W/"10c9ff-bjEo04BeecoM4mCncJQgwZ+vlOo"
    Date: Mon, 08 Jul 2019 10:12:58 GMT
    Connection: keep-alive

We suggest using an existing chart library (e.g. [chart.js](https://www.chartjs.org/)) however this decision is left to you. Remember to include any dependencies in the `package.json`
 
The submission should be:

- Written in modern Javascript or Typescript.

- Structured in a clear manner.

- Should render sensibly on a mobile device.

- Be visually appealing.

### Happy Coding!
