/* eslint-disable no-console */
/**
 * Control - Index
 * ---
 * This index file starts up the Control service module.
 * 
 * @package  Time
 * @author   Ivan de Wolf
 */

const { exec } = require('child_process')
const fs = require('fs')

const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const http_port = 4000


const time = new function() {
    /**
     * The configuration JSON object.
     */
    let config

    /**
     * Configure the different routes possible.
     */
    let configureRoutes = () => {
        app.use(express.static(__dirname + '/public', { 
            'index': false
        }))

        // app.use((req, res, next) => {
        //     res.header("Access-Control-Allow-Origin", "http://localhost:3000")
        //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
        //     next()
        // })

        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())

        /* Get the current active activity ids. */
        app.get('/current', (req, res) => {
            let data_file = fs.readFileSync(__dirname + '/times.json')

            res.send(JSON.parse(data_file).current)
        })

        /* Get the info about a activity. */
        app.get('/activity', (req, res) => {
            let data_file = fs.readFileSync(__dirname + '/times.json')

            res.send(JSON.parse(data_file).activities[req.query.id])
        })

        /* Get the info about a category. */
        app.get('/category', (req, res) => {
            let data_file = fs.readFileSync(__dirname + '/times.json')

            res.send(JSON.parse(data_file).category[req.query.id])
        })

        /* Get the info about a time. */
        app.get('/time', (req, res) => {
            let data_file = fs.readFileSync(__dirname + '/times.json')

            res.send(JSON.parse(data_file).times[req.query.id])
        })

        /* Catch every other request. */
        app.get('*', (req, res) => {
            res.sendFile(__dirname + '/public/home.html')
        })
    }

    /**
     * Initiate the Time module.
     */
    this.init = () => {
        console.log('🔧 Starting Time module...')

        configureRoutes()

        app.listen(http_port, () => console.log('🖥  Time server running on http://localhost:' + http_port))
    }
}

time.init()
