import { Story } from "@/story/storyloader";
import { Dispatch, SetStateAction } from "react";
import styles from "@/styles/storyCard.module.scss";

export default function StoryCard( {story, setId } : { story: Story, setId: Dispatch<SetStateAction<number>> } ) {
    return (
        <div className={styles.card}>
            <h1>{story.title}</h1>
            <div className={styles.card__container}>
                <p className={styles.card__text}>
                    {story.description}
                </p>
                <div className={styles.card__buttonBox}>
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
        </div>
    )
}