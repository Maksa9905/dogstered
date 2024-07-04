const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI);

type requestType = string[];

const DogImageSchema = new mongoose.Schema({
  _id: String,
  url: String,
  pageNumber: Number,
});

const DogImageModel =
  mongoose.models.DogImageModel ||
  mongoose.model("DogImageModel", DogImageSchema);

// Получает в качестве параметра массив из url адресов для картинок
export async function POST(req) {
  const request: requestType = await req.json();
  const length = request.length;

  for (let i = 0; i < length; i++) {
    const currentPage = Math.floor(i / 20) + 1;
    const newUrl = new DogImageModel({
      _id: new mongoose.Types.ObjectId(),
      url: request[i],
      pageNumber: currentPage,
    });
    console.log(newUrl);
    await newUrl.save();
  }

  return new Response("200");
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");
  if (page === null) {
    return new Response("Нет введенной страницы");
  }

  const pageNumber = parseInt(page);
  const images = await DogImageModel.find({ pageNumber: pageNumber });

  return new Response(JSON.stringify(images));
}
