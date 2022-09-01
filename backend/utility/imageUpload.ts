import multer from 'multer'
const upload = multer({dest: 'uploads/cover-image/'})

export default upload