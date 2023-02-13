require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const jsonFile = require('json-file-plus');
const path = require('path');
const fileName = path.join(
  process.cwd(),
  'backend',
  process.env.BACKEND_FILE,
);

console.log(fileName);
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post(
  '/inpay/signup/step/:step/save',
  (req, res) => {
    const { params: { step }, body } = req;

    jsonFile(fileName, (err, file) => {
      if (err) return err;

      file.set({
        [step]: body,
      });
      file.save()
        .then(() => {
          file.get(step)
            .then(response => res.json(response));
        });
    });
  },
);

app.listen(
  process.env.BACKEND_PORT,
  () => console.log(`Listening for CHALLENGE requests on port ${process.env.BACKEND_PORT}!`),
);
