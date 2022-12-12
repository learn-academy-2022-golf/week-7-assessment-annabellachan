# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The controller of the app is where the program communicate, interact, and retrieve data from the database. It will then pass it to where it is needed. 
class BlogPostsController < ApplicationController
  def index
    # ---2) Index shows all database entries and also attaching .all to the end of BlogPost
    @posts = BlogPost.all
  end

  # ---3) Show allows you to view and find any specific data in the database with the same id passing down into the params. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The new method will guide you to a page where you want to make data entry but does not allow you to actually enter the database yet. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Create allows the user to be redirected to the post page or back to the form page depending on if the page is valid. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) Edit will display the routes where the user can change the blog specifically at which id.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The update method updates an entry that is entered into the database by taking the first id of the entry if it is valid. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) Destroy navigates the user back to the post that was intended to be deleted by the user if the post was not valid. 
      redirect_to blog_posts_path
    end
  end

  # ---9) Private method ensures that the database can not be hacked and only allows certain specific data to be created in order for the database to be protected. Also known as strong params. 
  private
  def blog_post_params
    # ---10) The blog post database will only allow a title and content column. 
    params.require(:blog_post).permit(:title, :content)
  end
end

# It got a little confusing which parts needed to be explained because the placements of the numbers. Hopefully this was what you were looking for. 