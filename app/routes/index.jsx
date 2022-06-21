import { CloudinaryContext, Image, Transformation } from "cloudinary-react";

export default function Images() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif"}} className="container">
      <h1>
        <strong>Censor Images with Remix AI</strong>
      </h1>
      <br />
      <CloudinaryContext cloudName="beswift">
        <div className="b-img">
          <h2>
            1.<strong>Default Censor Effect</strong>
          </h2>
          <Image
            publicId="censor-images/windows-kRWY72TKB0Y-unsplash_jjgaz5.jpg"
            className="b-img"
          >
            <Transformation crop="scale" height="500" width="800" />
            <Transformation effect="pixelate_faces" />
          </Image>
        </div>
        <div className="b-img">
          <h2>
            2.<strong>Light Censor Effect</strong>
          </h2>
          <Image
            publicId="censor-images/photo-1650228975266-3ec56c93a58f_u9lwt5.jpg"
            className="b-img"
          >
            <Transformation crop="scale" height="600" width="1000" />
            <Transformation effect="pixelate_faces:10" />
          </Image>
        </div>
        <div className="b-img">
          <h2>
            3.<strong>Thick Censor Effect</strong>
          </h2>
          <Image
            publicId="censor-images/photo-1653908331835-a5ebaf7113f1_sjsgjk.jpg"
            className="b-img"
          >
            <Transformation crop="scale" height="700" width="1000" />
            <Transformation effect="pixelate_faces:40" />
          </Image>
        </div>
      </CloudinaryContext>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0.5rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .b-img {
          margin-top: 1rem;
          max-height: 700px;
          max-width: 900px;
          
        }
      `}</style>
    </div>
  );
}