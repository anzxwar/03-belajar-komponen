import { getImageUrl } from '@/utils/utils';

function Avatar({ person, size }) {
    return (
      <image
        className="avatar"
        src={getImageUrl(person)}
        width={size}
        height={size}
      />
    );
  }

export default function MyGallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <Avatar
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profesi: </b> 
            Fisikawan dan kimiawan
          </li>
          <li>
            <b>Penghargaan: 4 </b> 
            (Penghargaan Nobel Fisika, Penghargaan Nobel Kimia, Medali Davy, Medali Matteucci)
          </li>
          <li>
            <b>Telah Menemukan: </b>
            polonium (unsur kimia)
          </li>
        </ul>
        <h2>Katsuko Saruhashi</h2>
        <Avatar
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profesi: </b> 
            Ahli Geokimia
          </li>
          <li>
            <b>Penghargaan: 2 </b> 
            (Penghargaan Miyake Geokimia, Penghargaan Tanaka)
          </li>
          <li>
            <b>Telah Menemukan: </b>
            sebuah metode untuk mengukur karbon dioksida pada air laut
          </li>
        </ul>
      </section>
    </div>
  );
}