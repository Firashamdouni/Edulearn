import React, { Component } from 'react';
import ItemBlog from "./itemBlog";
import ImgBlog1 from "./blog/1.jpg";
import ImgBlog2 from "./blog/2.jpg";
import ImgBlog3 from "./blog/3.jpg";
import ImgBlog4 from "./blog/4.jpg";
import ImgBlog5 from './blog/5.jpg';

class ItemsBlog extends Component {
    constructor(props){
        super(props)
        this.state={
            tabBlog:[
            {
            imgBlog:ImgBlog1,
            dateBlog:`${new Date().getFullYear()} ${new Date().getMonth()+1} ${new Date().getDate()}`,
            titleBlog:"Traditional Elementary Education of Traditional College",
            paragrapheBlog:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum"

            },
            {
                imgBlog:ImgBlog2,
                dateBlog:`${new Date().getFullYear()} ${new Date().getMonth()+1} ${new Date().getDate()}`,
                titleBlog:"Traditional Elementary Education of Traditional College",
                paragrapheBlog:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum"

            },
            {
                imgBlog:ImgBlog3,
                dateBlog:`${new Date().getFullYear()} ${new Date().getMonth()+1} ${new Date().getDate()}`,
                titleBlog:"Traditional Elementary Education of Traditional College",
                paragrapheBlog:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum"

            },
            {
                imgBlog:ImgBlog4,
                dateBlog:`${new Date().getFullYear()} ${new Date().getMonth()+1} ${new Date().getDate()}`,
                titleBlog:"Traditional Elementary Education of Traditional College",
                paragrapheBlog:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum"

            },
            {
                    imgBlog:ImgBlog5,
                    dateBlog:`${new Date().getFullYear()} ${new Date().getMonth()+1} ${new Date().getDate()}`,
                    titleBlog:"Traditional Elementary Education of Traditional College",
                    paragrapheBlog:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum"

            }
        ]}

    }
    render() {
        return (
            <div className="blog-page-area sec-spacer">
                <div className="container">
                    {this.state.tabBlog.map((el,i)=><ItemBlog key={i} element={el}/>)}
                </div>
            </div>
        );
    }
}

export default ItemsBlog;
