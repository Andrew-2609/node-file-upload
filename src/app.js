import express from 'express';
import multer from 'multer';
import path from 'path';

const app = express();

const storage = multer.diskStorage({

    // handle the destination '-'
    destination: (req, file, cb) => {
        // error first callback
        cb(null, 'uploads/');
    },

    // allows operations with the file name
    filename: (req, file, cb) => {
        // error first callback
        cb(null, `${file.fieldname}-${Date.now()}.${path.extname(file.originalname)}`);
        // cb(null, file.originalname); would save the uploaded file with its original name
    }
});

const upload = multer({ storage });

app.use(express.static('public'));

app.post('/file/upload', upload.single('file'), (req, res) => {
    res.send('<h2>Upload successfully made!</h2>');
});

export { app };
