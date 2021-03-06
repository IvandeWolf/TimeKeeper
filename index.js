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
        app.get('/activities', (req, res) => {
            let data_file = JSON.parse(fs.readFileSync(__dirname + '/times.json'))

            res.send(data_file.activities)
        })

        /* Get the info about a category. */
        app.get('/category', (req, res) => {
            let data_file = JSON.parse(fs.readFileSync(__dirname + '/times.json'))

            if (req.query.id)
                res.send(data_file.category[req.query.id])
            else
                res.send(data_file.category)
        })

        /* Get the info about a time. */
        app.get('/times', (req, res) => {
            let data_file = JSON.parse(fs.readFileSync(__dirname + '/times.json'))

            res.send(data_file.times)
        })
        app.post('/times', (req, res) => {
            let data_file = JSON.parse(fs.readFileSync(__dirname + '/times.json'))
            let id = createId()

            data_file.times[id] = {
                "id": id,
                "activity": req.body.activity,
                "start": req.body.start_time,
                "end": null,
                "notes": req.body.notes
            }

            data_file.current.push(id)

            fs.writeFileSync(__dirname + '/times.json', JSON.stringify(data_file, null, 2))

            res.send()
        })
        app.post('/time', (req, res) => {
            let data_file = JSON.parse(fs.readFileSync(__dirname + '/times.json'))
            let time = data_file.times[req.body.id]

            time.start = req.body.start
            time.end = req.body.end
            time.notes = req.body.notes

            fs.writeFileSync(__dirname + '/times.json', JSON.stringify(data_file, null, 2))

            res.send()
        })
        app.get('/time', (req, res) => {
            let data_file = fs.readFileSync(__dirname + '/times.json')

            res.send(JSON.parse(data_file).times[req.query.id])
        })
        app.post('/time/done', (req, res) => {
            let data_file = JSON.parse(fs.readFileSync(__dirname + '/times.json'))
            let index = data_file.current.indexOf(req.body.id)

            data_file.current.splice(index, 1)

            fs.writeFileSync(__dirname + '/times.json', JSON.stringify(data_file, null, 2))

            res.send()
        })

        /* Catch every other request. */
        app.get('*', (req, res) => {
            res.sendFile(__dirname + '/public/home.html')
        })
    }

    let createId = () => {
        let timestamp = (new Date().getTime() / 1000 | 0).toString(16);

        return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
            return (Math.random() * 16 | 0).toString(16)
        }).toLowerCase()
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
