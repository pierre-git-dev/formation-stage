/*  import de l'image a afficher du dossier assets */

import noProjectSelectedImg from '../assets/no-projects.png';
import Button from './buttonStyling.jsx';

/*
Component utiliser lors d'une non selection de projet
*/
export default function ProjectNoSelected () {
    return (
        <div>
        <img src={noProjectSelectedImg} alt='Aucune tache séléctionné' className=" w-16 h-16 object-contain mx-auto "/>
        <h2 className=" text-xl font-bold text-stone-500 my-4 ">selection de projet</h2>
        <p className='text-stone-400 mb-4' >veulliez selectionner un projet</p>   
        <p className='mt-8'>
            <Button>Créer un nouveau projet</Button>
        </p>
        </div>     
    )
}