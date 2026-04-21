/**
 * Challenge: create a page that displays your favorite jokes
 * - Create a Joke component in its own file.
 * - Import and render 4-5 <Joke /> components
 * - Each Joke should receive a "setup" prop and a "punchline" prop
 *   and render those however you'd like
 * - Use your favorite 2-part jokes (setup & punchline), or check
 *   jokes.md file for some examples.
 * 
 * EXTRA CREDIT:
 * Some jokes are only a punchline with no setup:
 * 
 * E.g.: "It’s hard to explain puns to kleptomaniacs because 
 * they always take things literally."
 * 
 * If you don't pass in a "question" prop, how might you make it only 
 * show the punchline?
 */
import Joke from './components/Joke.jsx'
import data from './data.js'
export default function App() {
    console.log(data) // array

    let jokes = data.map(
        item =>
            <Joke setup={item.setup}
                punchline={item.punchline} />
    )

    return (
        <>
            {/* <Joke
                setup="I got my daughter a fridge for her birthday."
                punchline="I can't wait to see her face light up when she opens it."
                upVote={upVote + 1}
                fname={"Prasad"}
                uploadedByOGAuthor={true}
                comments={[
                    {
                        authors: {

                            id: 1,

                        }
                    },
                    {}

                ]
                }

            /> */}
            {/* <Joke />
            <Joke />
            <Joke />
            <Joke />
            <Joke /> */}
            {jokes}
        </>
    )
}