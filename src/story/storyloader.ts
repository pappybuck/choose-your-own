import path from "path";
import { promises as fs } from 'fs';

const state = {
    stories : [] as Story[],
    isLoaded : false,
}

export type Story = {
    id : number,
    title : string,
    description : string,
    isEnding : boolean,
    leftid : number,
    left: string,
    rightid : number,
    right : string,
}


async function loader() {
    const filepath = path.join(process.cwd(), 'src', 'story', 'story.json')
    const data = await fs.readFile(filepath, 'utf8');
    const story: Story[] = JSON.parse(data);
    return story;
}

export default async function storyLoader(id : number) {
    if (state.isLoaded) {
        return state.stories.find(s => s.id === id);
    }
    state.stories = await loader();
    state.isLoaded = true;
    return state.stories.find(s => s.id === id);
}

