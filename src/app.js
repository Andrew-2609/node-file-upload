import express from 'express';
import multer from 'multer';

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // error first callback
        cb(null, 'uploads/');
    },

    filename: (req, file, cb) => {
        // error first callback
        cb(null, `${file.fieldname}-${Date.now()}`);
    }
});

const upload = multer({ storage });

app.use(express.static('public'));

app.post('/file/upload', upload.single('file'), (req, res) => {
    res.send('<h2>Upload successfully made!</h2>');
});

export { app };