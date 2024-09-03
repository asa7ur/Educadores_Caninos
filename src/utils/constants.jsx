import image_1 from '../assets/image_1.jpg'
import image_2 from '../assets/image_2.jpg'
import image_3 from '../assets/image_3.jpg'
import cat_1 from '../assets/cat_1.jpg'
import cat_2 from '../assets/cat_2.jpg'
import cat_3 from '../assets/cat_3.jpg'
import cat_4 from '../assets/cat_4.jpg'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export const links = [
  {
    id: 1,
    to: 'servicios',
    value: 'servicios',
  },
  {
    id: 2,
    to: 'nuestro-equipo',
    value: 'nuestro equipo',
  },
  {
    id: 3,
    to: 'contactar',
    value: 'contactar',
  },
  {
    id: 4,
    to: 'el_santuario',
    value: 'el santuario',
  },
]

export const services = [
  {
    id: 1,
    image: image_1,
    title: 'Educación canina',
    description:
      'Transformamos el comportamiento de tu perro con técnicas positivas y personalizadas.',
  },
  {
    id: 2,
    image: image_2,
    title: 'Actividades',
    description:
      'Estimulación física y mental para que tu perro se divierta y aprenda al mismo tiempo.',
  },
  {
    id: 3,
    image: image_3,
    title: 'Residencia canina',
    description:
      'Un hogar lejos de casa, donde tu perro estará cuidado y feliz mientras tú no estás.',
  },
]

export const members = [
  {
    id: 1,
    image: cat_1,
    title: 'Mistral',
    description:
      'Con agilidad y gracia, enseña a los perros a moverse con precisión. Su método es observar primero, luego liderar con su elegante movimiento. Mistral es un maestro paciente, conocido por su habilidad para convertir a los perros en verdaderos atletas.',
  },
  {
    id: 2,
    image: cat_2,
    title: 'Luna',
    description:
      'Su especialidad es enseñar a los perros a ser sigilosos y astutos. Luna se desliza entre las sombras, mostrando a los perros cómo moverse sin ser detectados. Su método es casi mágico, dejando a los perros encantados y a los dueños impresionados.',
  },
  {
    id: 3,
    image: cat_3,
    title: 'Zephyr',
    description:
      'Zephyr enseña a los perros a resolver problemas, usando juegos y acertijos. Con su paciencia infinita, guía a los perros a pensar antes de actuar, desarrollando su inteligencia y habilidades cognitivas. Su enseñanza es un arte sutil.',
  },
  {
    id: 4,
    image: cat_4,
    title: 'Rufus',
    description:
      'Es experto en enseñar a los perros a proteger el hogar. Con su presencia imponente y su mirada firme, Rufus guía a los perros hacia la obediencia, mostrándoles cómo vigilar y proteger. Su enfoque es directo y no tolera la indisciplina.',
  },
]

export const socials = [
  {
    id: 1,
    icon: <FaFacebook className='icon' />,
    text: 'Santuario La Candela',
    url: 'https://www.facebook.com/santuariolacandela',
  },
  {
    id: 2,
    icon: <FaInstagram className='icon' />,
    text: 'santuario_lacandela',
    url: 'https://instagram.com/santuario_lacandela',
  },
]