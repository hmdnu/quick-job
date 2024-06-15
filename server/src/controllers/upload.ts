import { Context } from "hono";
import { writeFileSync } from "fs";
import { StatusCodes as http } from "http-status-codes";

export async function handleFileUpload(c: Context) {
  const uploader = c.req.query("uploader");

  try {
    const file = await c.req.formData();
    const image = file.get("image");

    if (image instanceof File) {
      const buffer = await image.arrayBuffer();
      writeFileSync(`./img/${uploader}-${Date.now()}.jpg`, Buffer.from(buffer));
    }

    return c.json({ message: "file uploaded" }, http.OK);
  } catch (error) {
    console.log(error);
    return c.json({ message: error }, http.INTERNAL_SERVER_ERROR);
  }
}
