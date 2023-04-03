import { Story } from "@/story/storyloader";
import { Dispatch, SetStateAction } from "react";


export default function StoryCard( {story, setId } : { story: Story, setId: Dispatch<SetStateAction<number>> } ) {
    return (
        <div>
            <h1>{story.title}</h1>
            <div className="button-container">
                <p>
                    {story.description}
                </p>
                {story.isEnding ?
                (
                    <button onClick={() => setId(1)}>Restart</button>
                ) : (
                    <>
                        <button onClick={() => setId(story.leftid)}> {story.left} </button>
                        <button onClick={() => setId(story.rightid)}> {story.right} </button>
                    </>
                )}
            </div>
        </div>
    )
}