import {useEffect} from 'react'
import SectorList from '../components/SectorList'

export default function Work() {


    useEffect(() => {
        const res = fetch("localhost:80/demo.php", {
            method : "POST",
            body : JSON.stringify({type : "getSector"})
        }).then(res => res.json());
        console.log(res);
        console.log("Test");
    }, [])
    

  return (
    <div>
      <SectorList num={1} nom='d'/>
    </div>
  )
}
