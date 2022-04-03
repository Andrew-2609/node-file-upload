import express from 'express';
import multer from 'multer';

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/file/upload', upload.single('file'), (req, res) => {
    res.send('<h2>Upload successfully made!</h2>');
});

export { app };