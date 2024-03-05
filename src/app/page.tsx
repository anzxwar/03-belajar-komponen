import { Gallery } from "@/components/gallery";

export default function Bio() {
  return (
    <div className="intro">
      <h1>Selamat datang di website Anwar!</h1>
      <p className="summary">
        Anda dapat membaca uneg-uneg saya di sini.
        <br/><br/>
        <b>Juga ada <i>foto</i> ilmuan!</b>
        <Gallery />
      </p>
    </div>
  );
}