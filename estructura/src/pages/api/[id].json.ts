import { APIRoute } from "../../../node_modules/astro/dist/@types/astro";

const usernames = ['jake', 'matt', 'algo', 'otro'] as const;

export const GET: APIRoute = ({ params, request }) => {
    const id = params.id;
    return new Response(
        JSON.stringify({
            name: usernames[id]
        })
    );
}

export function getStaticPaths() {
    return [
        { params: { id: '0' } },
        { params: { id: '1' } },
        { params: { id: '2' } },
    ]
}