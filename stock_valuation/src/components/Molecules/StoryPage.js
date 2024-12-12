import React, { useState,useEffect } from 'react';
import { Box, Typography, Button, TextField, Divider,IconButton } from '@mui/material';
import styled from '@emotion/styled';
import HeaderTemplate from '../Templates/HeaderTemplate';
import ArrowBackIcon from '../../assests/arrow_back_ios.svg';
import ShareIcon from '../../assests/share.svg';
import CommentIcon from '../../assests/chat.svg';
import LikeIcon from '../../assests/Like.svg';
import DislikeIcon from '../../assests/thumb_down.svg';
import DeleteIcon from '../../assests/delete (3).svg';
import {useMediaQuery} from '@mui/material';
import theme from '../../theme';
import axios from 'axios';
import {useParams,useNavigate} from 'react-router-dom';

const PageContainer = styled(Box)({
  width: '100%',
  minHeight: '100vh',
  backgroundColor: '#FFFFFF',
});

const Container = styled(Box)(({isMobile})=>({
  padding: '20px 40px',
  maxWidth: '1187px',
  margin: '0 auto',
  marginTop: isMobile ? '60px' :'160px',
}));

const HeaderRow = styled(Box)(({isMobile})=>({
  display: 'flex',
  alignItems: 'center',
  justifyContent: isMobile ? 'flex-start' :'space-between',
  marginBottom: '20px',

}));

const BackContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  cursor: 'pointer',
});

const ContentContainer = styled(Box)({
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#F9F9F9',
  marginBottom: '20px',
});

const TitleText = styled(Typography)({
  fontSize: '22px',
  fontWeight: 600,
  fontFamily: 'Poppins, sans-serif',
});

const SubtitleText = styled(Typography)({
  fontSize: '16px',
  color: '#333333',
  fontFamily: 'Poppins, sans-serif',
  marginBottom: '15px',
});

const Footer = styled(Box)(({isMobile})=>({
  display: 'flex',
  justifyContent: isMobile ? 'flex-end' :'flex-end',
  alignItems: 'center',
  gap: isMobile ? '3px' : '10px',
  marginTop: '20px',
  marginLeft:isMobile ? '30px' : '0px'
}));

const ActionButton = styled(Button)(({ isMobile }) => ({
  color: '#005BA1',
  border: '1px solid #005BA1',
  borderRadius: '8px',
  padding: isMobile ? '5px' : '5px 15px', // Reduced padding on mobile
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 500,
  fontSize: '14px',
  textTransform: 'none',
  minWidth: '48px', // Ensures uniform button width in mobile view
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const ShareButton = styled(Button)({
  color: '#FFFFFF',
  border: '1px solid #005BA1',
  borderRadius: '8px',
  padding: '5px 20px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 600,
  fontSize: '14px',
  textTransform: 'none',
  background: '#005BA1',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
});

const CommentSection = styled(Box)({
  marginTop: '20px',
  padding: '10px',
  borderRadius: '8px',
});

const CommentHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '10px',
});

const CommentBoxContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const CommentBox = styled(TextField)({
  flexGrow: 1,
});

const CommentContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '10px 0',
});

const CommentAuthor = styled(Typography)({
  fontFamily: 'Poppins, sans-serif',
  fontSize: '18px',
  fontWeight: 600,
  color: '#000000',
  lineHeight: '27px',
  textAlign: 'left',
  marginTop:'40px'
});

const CommentText = styled(Typography)({
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  color: '#000000',
  lineHeight: '27.2px',
  textAlign: 'left',
  marginTop:'10px'
});

const ShareIconButton = styled(IconButton)({
  position: 'absolute', 
  right: '60px',
  color: '#FFFFFF',
  background: '#005BA1',
  marginTop:'890px',
  zIndex: 1,
});

const StoryPage = ({ onBack }) => {
window.scroll(0,0)
  const { stockName,id } = useParams();
  console.log('Stock Name:', stockName, 'ID:', id);
  const [storyContent, setStoryContent] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(10);
  const [dislikeCount, setDislikeCount] = useState(0);
  const navigate = useNavigate();
  const [stockDetails, setStockDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery(`(max-width:${theme.breakpoints.values.sm}px)`);


  useEffect(() => {
    const fetchStoryDetails = async () => {
      try {
        // Use dynamic ID from useParams
        const response = await axios.get(
          `http://ec2-65-0-139-224.ap-south-1.compute.amazonaws.com:8080/api/stock-stories/${id}`,
          {
            headers: {
              Accept: '*/*',
              Authorization:
                'Bearer  eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTczNDA5NTA2NSwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzM0MDA4NjY1fQ.7iPNG1HuN8SdaDMZUqsKf7Aq3nODE-T-pahyf1XbxiWvbc8eEqC41O7FcvYqFAJeiAaAde3k70ypj2qQY2hOmA',
              'Access-Control-Allow-Origin': '*',
            },
          }
        );
        const { story, likeCount: fetchedLikeCount } = response.data; // Extract data from response
        setStoryContent(story || 'No story available'); // Set story content
        setLikeCount(fetchedLikeCount || 0); // Set like count
      } catch (error) {
        console.error('Error fetching story details:', error);
        setStoryContent('Error fetching story details');
      }
    };
  
    if (id) {
      fetchStoryDetails(); // Trigger fetch when `id` is available
    }
  }, [id]); // Dependency array ensures re-run when `id` changes
  
  useEffect(() => {
    window.scroll(0,0)
    const fetchStockDetails = async () => {
      try {
        const response = await axios.get(
          'http://ec2-65-0-139-224.ap-south-1.compute.amazonaws.com:8080/api/stocks/1',
          {
            headers: {
              Accept: '*/*',
              Authorization:
                'Bearer  eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTczNDA5NTA2NSwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzM0MDA4NjY1fQ.7iPNG1HuN8SdaDMZUqsKf7Aq3nODE-T-pahyf1XbxiWvbc8eEqC41O7FcvYqFAJeiAaAde3k70ypj2qQY2hOmA',
              'Access-Control-Allow-Origin': '*',
            },
          }
        );
        setStockDetails(response.data); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stock details:', error);
        setLoading(false);
      }
    };
  
    fetchStockDetails();
  }, []);
  
  if (loading) {
    return <Typography>Loading...</Typography>;
  }
  
  if (!stockDetails) {
    return <Typography>Stock not found</Typography>;
  }
  
  const handleCommentClick = () => {
    setShowComments(!showComments);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { author: 'Rahul Gowda', text: newComment, time: '1 day ago' }]);
      setNewComment('');
    }
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <PageContainer>
      {/* Header Template */}
      <HeaderTemplate showLoginButton={true}/>

      <Container isMobile={isMobile}>
        <HeaderRow>
          <BackContainer onClick={onBack}>
            <img src={ArrowBackIcon} alt="Back" style={{ width:'24px', height:'24px' }} />
            <Typography style={{ fontFamily:'Poppins', fontWeight: 600,fontSize:'24px', marginLeft:'20px' }}>Back</Typography>
          </BackContainer>

          {!isMobile && (
            <ShareButton startIcon={<img src={ShareIcon} alt="Share" style={{ width: '24px', height: '24px' }}/>}>
              Share Story
            </ShareButton>
          )}
        </HeaderRow>

        <ContentContainer>
        {isMobile && (
            <ShareIconButton>
            <img src={ShareIcon} alt="Share" style={{ width: '24px', height: '24px' }}/>
            </ShareIconButton>
          )}
          <Typography variant="h6" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, marginBottom: '10px' }}>
  {stockDetails ? `${stockDetails.stockName} ${isMobile ? '' : `(${stockDetails.stockSymbol || ''})`}` : 'Loading stock details...'}
</Typography>

          {/* <TitleText>Story(Subject Name)</TitleText> */}
          {storyContent ? (
          storyContent.split('\n').map((paragraph, index) => (
          <SubtitleText key={index}>{paragraph}</SubtitleText>
           ))
           ) : (
          <Typography>No story available.</Typography>
  )}
        </ContentContainer>

        {!showComments && (
         <Footer isMobile={isMobile}>
         <ActionButton onClick={handleCommentClick} startIcon={<img src={CommentIcon} alt="Comment"/>}>
           Comment
         </ActionButton>
         <ActionButton startIcon={<img src={LikeIcon} alt="Like" />} onClick={handleLikeClick}>
         {isMobile ? null : `Like (${likeCount})`}
         </ActionButton>
         <ActionButton startIcon={<img src={DislikeIcon} alt="Dislike" />}>
           {isMobile ? null:'Dislike'}
         </ActionButton>
       </Footer>       
        )}

        {showComments && (
          <CommentSection>
            <CommentHeader>
              <Typography variant="h6" style={{fontWeight:'bold'}}>Comment</Typography>
              <Box display="flex" gap="10px">
                <IconButton><img src={LikeIcon} alt="Like"/></IconButton>
                <IconButton><img src={DislikeIcon} alt="Dislike"/></IconButton>
              </Box>
            </CommentHeader>
            <CommentBoxContainer>
              <CommentBox
                variant="outlined"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyDown={handleAddComment} 
                multiline
                rows={2}
              />
            </CommentBoxContainer>
            {comments.map((comment, index) => (
              <Box key={index} style={{ marginBottom:'10px'}}>
                <Typography variant="subtitle2" style={{ fontWeight:'bold'}}>{comment.author}</Typography>
                <Typography variant="caption" color="textSecondary">{comment.time}</Typography>
                <Typography variant="body2">{comment.text}</Typography>
                <Divider style={{ margin: '10px 0' }} />
              </Box>
                ))}
              <CommentContainer>
              <Box>
              <CommentAuthor>Rahul Gowda</CommentAuthor>
              <CommentText>
               Lorem ipsum dolor sit amet consectetur. Convallis aliquet pretium eu pellentesque enim non odio.
              </CommentText>
              </Box>
              <IconButton style={{marginTop:'50px'}}>
              <img src={DeleteIcon} alt="Delete"/>
              </IconButton>
            </CommentContainer>
          </CommentSection>
        )}
      </Container>
    </PageContainer>
  );
};

export default StoryPage;
