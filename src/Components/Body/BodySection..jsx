import Card from "../Card/CardSection";
import styles from "./Body.module.css"

const Body = (props) =>{
  return  (
    <>
      <div className={styles.main_con}>
        {
      props.data.map((ele , idx) =>{
        return <Card key={idx} {...ele} />
      })
        }
      </div>
    </>
  )
}
export default Body