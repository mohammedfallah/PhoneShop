// styled-components ایمپورت کردن 
import styled from 'styled-components' ;



//استایل ButtonContainer
export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background: transparent;
border:0.05rem solid var(--lightBlue);
border-color:${props => props.cart ? "var(--mainYellow)" : "var(--mainBlue)"};
color:${prop => prop.cart ? "var(--mainYellow)" :"var(--lightBlue)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
font-family:'IRANSansMobile';

&:hover {
    background:${prop => prop.cart ? "var(--mainYellow)" :"var(--lightBlue)"};
    color:var(--mainBlue);
    font-family:'IRANSansMobile';

}
&:focus{
    outline:none;
    font-family:'IRANSansMobile';

 }
`