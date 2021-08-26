import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import BlogList from '../Components/BlogContainer/BlogList';
import Carousel from '../Components/Carousel/Carousel';
import AboutMe from '../Components/AboutMe/AboutMe';
import '../Styling/blogpage.css'
import FeaturedBlogList from '../Components/FeaturedBlogs/FeaturedBlogList';
import LatestBlogList from '../Components/LatestBlog/LatestBlogList';
import Pagination from '../Components/Pagination/Pagination';



function Blogpage() {

    return (
        <div className="blog__page" style={{flexGrow: 0}}>
            <Container>
                <Grid container spacing={10} >
                    <Grid item xs={12} sm={12}>
                        <Carousel />
                    </Grid>
                    <Grid item xs={12} sm={8} >
                        <h1>blog container</h1>
                        <BlogList/>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <h1>About me</h1>
                        <AboutMe/>
                    </Grid>
                    <Grid item xs={12} sm={12} >
                        <h1>Top Blog</h1>
                        <FeaturedBlogList/>
                    </Grid>
                    <Grid item xs={12} sm={12} >
                        <h1>Latest Blog</h1>
                        <LatestBlogList />
                    </Grid>
                    <Grid item xs={12} sm={12} >
                        <Pagination />
                    </Grid>
                    
                </Grid>
            </Container>

            
        </div>
    )
}

export default Blogpage



{/* <React.Fragment>
    <CssBaseline />
    <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
            {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
            ))}
            </Grid>
            <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
            />
            </Grid>
        </main>
    </Container>
    <Footer title="Footer" description="Something here to give the footer a purpose!" />
</React.Fragment> */}