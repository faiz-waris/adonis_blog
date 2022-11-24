'use strict'


const Post = use('App/Models/Post')

class PostController {

 
    async index({ view }){

        // const posts = [
        //     {title:'post1', body:'this is post 1'},
        //     {title:'post2', body:'this is post 2'},
        //     {title:'post3', body:'this is post 3'}
        // ]

        const posts = await Post.all()
    

        return view.render('posts.index',{
            title : "latest post",

            posts: posts.toJSON()
        })
    }

    async details({ params,view }){
        const post = await Post.find(params.id)

        return view.render('posts.details',{
            post: post
        })
    }

    async add({ view }){
        return view.render('posts.add')
    }
}

module.exports = PostController
