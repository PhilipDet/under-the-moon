import styled from "styled-components";

export const FooterStyled = styled.footer`
    width: 100%;
    padding: 5rem;
    background-color: #262626;
    color: white;

    .container {
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    #subscribe {
        display: flex;
        flex-direction: column;
        gap: 2.3rem;
        max-width: 38rem;

        h3 {
            font-weight: 400;
        }

        input {
            padding: 1rem;
            font-size: 1.6rem;
            border: none;
        }

        input[type="button"] {
            background-color: #1f1f1f;
            padding: 1rem 4rem;
            color: #fff;
            width: 40%;
            border: 1px solid #fff;
            cursor: pointer;
        }
    }

    #links-container {
        display: flex;
        justify-content: space-between;
        gap: 5rem;
        width: 50%;

        #left {
            display: flex;
            flex-direction: column;
            gap: 2rem;

            #quick-links {
                p {
                    font-size: 1.6rem;
                }

                li {
                    margin-left: 1rem;
                    margin-bottom: 0.5rem;

                    a {
                        color: #fff;
                        text-decoration: none;
                    }
                }
            }

            #socials {
                p {
                    font-size: 1.6rem;
                }

                ul {
                    display: flex;
                    gap: 1rem;

                    li {
                        margin-left: 1rem;
                        margin-bottom: 0.5rem;

                        a {
                            color: #fff;
                            text-decoration: none;
                        }
                    }
                }
            }
        }

        ul {
            list-style: none;
            padding: 0;
        }

        #find-us {
            p {
                font-size: 1.6rem;
            }

            #items {
                margin-left: 1rem;

                ul {
                    list-style: none;
                    margin-bottom: 1rem;

                    li {
                        font-size: 1.6rem;
                        font-weight: 400;
                    }
                }
            }
        }
    }

    .footer-header {
        margin-bottom: 1rem;
    }
`;
