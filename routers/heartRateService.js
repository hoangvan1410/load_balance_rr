const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
const apiAdapter = require("./apiAdapter");

const BASE_URL = "https://heart-rate-service-hcmus.herokuapp.com";
const api = apiAdapter(BASE_URL);

router.post("/api/rates", (req, res) => {
    if (req.headers.token === undefined) {
        api.post(req.originalUrl).then((resp) => {
            res.send(resp.data);
        });
    } else {
        api.post(req.originalUrl, req.body, {
            headers: {
                token: req.headers.token,
            },
        }).then((resp) => {
            res.send(resp.data);
        });
    }
});

router.post("/api/rates/arr", (req, res) => {
    if (req.headers.token === undefined) {
        api.post(req.originalUrl).then((resp) => {
            res.send(resp.data);
        });
    } else {
        api.post(req.originalUrl, req.body, {
            headers: {
                token: req.headers.token,
            },
        }).then((resp) => {
            res.send(resp.data);
        });
    }
});

router.post("/api/rates/delete", (req, res) => {
    if (req.headers.token === undefined) {
        api.post(req.originalUrl).then((resp) => {
            res.send(resp.data);
        });
    } else {
        api.post(req.originalUrl, req.body, {
            headers: {
                token: req.headers.token,
            },
        }).then((resp) => {
            res.send(resp.data);
        });
    }
});

router.post("/api/rates/update/label", (req, res) => {
    if (req.headers.token === undefined) {
        api.post(req.originalUrl).then((resp) => {
            res.send(resp.data);
        });
    } else {
        api.post(req.originalUrl, req.body, {
            headers: {
                token: req.headers.token,
            },
        }).then((resp) => {
            res.send(resp.data);
        });
    }
});

router.get("/api/rates", (req, res) => {
    if (req.headers.token === undefined) {
        api.get(req.originalUrl).then((resp) => {
            res.send(resp.data);
        });
    } else {
        api.get(req.originalUrl, {
            headers: {
                token: req.headers.token ?? "",
            },
        }).then((resp) => {
            res.send(resp.data);
        });
    }
});

module.exports = router;