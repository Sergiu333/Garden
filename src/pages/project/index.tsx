import items from '../../constants/items'
import Link from "next/link";

const Project = () => {
  return(
      <div className="bg-red-800 text-w text-[30px]">
          <div>all project</div>
          {
              items.map(({price, id}, index)=>{
                  return(
                      <Link href={'/project/'+ id} key={`${id}`}>
                          <div className="flex flex-col gap-2">
                              {price}
                          </div>
                      </Link>
                  )
              })
          }
      </div>
  )
}

export default Project;
