const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/v1", (req, res) => {
  const tiktokUrl = req.query.url
  if (!tiktokUrl) {
    return res.status(400).json({ error: "Parâmetro 'url' é obrigatório" });
  }
  const params = { url: tiktokUrl }; 

  async function load() {
    try {
      let response = await axios.get("https://tikwm.com/api/", { params });
      res.status(200).send(response.data);
    } catch (error) {
      console.log(`erro na requisicao: ${error.message}`);
      res.status(500).send("Erro ao fazer a requisição");
    }
  }

  load();
});

module.exports = router;

