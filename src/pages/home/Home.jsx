import {Container} from './styles'
import { Categories } from './categories/Categories'
import { Movies } from './movies/Movies'

export function Home(){
   
    return(
        <Container>
            <Categories />
            <Movies />
        </Container>
    )
}