export interface BlogTypes {
  id: string;
  title: string;
  image: string;
  category: string;
  author: string;
  authorPic: string;
  published_date: string;
  reading_time: string;
  content: React.ReactNode;
  tags: string[];
}


export interface BlogCardsPropTypes {
  blogs: BlogTypes[];
  currentPage: number;
  selectedCategory: string | null;
  pageSize: number;
}

export interface SideBarTypes {
  title: string;
  id: number;
  content?: string;
}

export interface PaginationPropTypes {
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  totalBlogs: number;
  pageSize: number;
}


export interface CategorySelectionTypes {
  name: string;
  bgColor: string;
  imgSrc: string;
 
}
export interface CategorySelectionPropTypes {
  onSelectCategory: (category: string | null) => void;
  activeCategory: string | null;
  selectedCategory: string | null;
}



export interface Props {
    openNav: () => void;
  }
  
  export interface navProps {
    showNav: boolean;
    closeNav: () => void;
  }