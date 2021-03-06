const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Add middleware to authenticate requests
// app.use(myMiddleware);

// build multiple CRUD interfaces:
app.get('/:id', (req, res) => res.send('abcget ' + req.params.id));
app.post('/', (req, res) => res.send('post'));
app.put('/:id', (req, res) => res.send('put ' + req.params.id));
app.delete('/:id', (req, res) => res.send('del ' + req.params.id));
app.get('/', (req, res) => res.send('abcget *'));

module.exports = app