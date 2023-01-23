const multer = require('multer');


const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        const extArray = file.originalname.split('.');
        const extension = extArray[extArray.length - 1];
        cb(null, `${Date.now()}.${extension}`);
    },
    destination: 'public/uploads/images/',
});

const uploads = multer({ storage }).single('avatar');

// File Upload.
exports.uploadFile =
    async (req, res, next) => {
        uploads(req, res, async (err) => {
            if (err) {
                res.status(500);
            }
            console.log(req.file.originalname)
            //let uploadFile = await models.fileUpload.create(req.file);
            // if (!uploadFile) {
            //     res.status(400).json({ message: 'Error while uploading file!', msgKey: 'errorFileUpload' })
            // } else {
            //     res.status(200).json({
            //         uploadFile
            //     });
            // }

        });
        next()
    };
