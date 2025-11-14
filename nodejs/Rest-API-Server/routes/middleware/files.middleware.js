import multer from "multer";

const storage = multer.diskStorage({
  destination(request, file, cb) {
    cb(null, "./public/uploads");
  },
  filename(request, file, cb) {
    let ext = file.originalname.substring(file.originalname.lastIndexOf("."));
    let file_name = "user_pic_" + Date.now() + ext;
    cb(null, file_name);
  },
});

export let noFile = multer();
export let upload = multer({
  storage,
});
