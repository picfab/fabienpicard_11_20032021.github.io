/**
 * A list of equipment component
 * @param   {array}  equipements an array of appartment's equipment
 */
export default function Equipement({ equipements }) {
  return <ul className="equipements">
    {equipements.map((materiel, i) => <li key={i}>{materiel}</li>)}
  </ul>
}
