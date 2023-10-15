import { rest } from 'msw';

export const handlers = [
    rest.get(`https://www.reddit.com/t/popular.json`, (req, res, ctx) => {
        return res(
            ctx.json({
                data: {
                    children: [
                        {
                            data: {
                                title: 'Title 1',
                                thumbnail: 'https://via.placeholder.com/150',
                                permalink: '/r/popular/1',

]