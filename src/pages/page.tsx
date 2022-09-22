import {useState, useContext} from "react";
// import Router, {useRouter} from "next/router"; //■tamura
import { useRouter } from 'next/router'
import axios from "axios";
import {AdminFlagContext} from "src/components/providers/AdminFlagProvider";

const Page = () => {
    const {"値A", "値B", "値C", status, setStatus} = useContext(AdminFlagContext);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any | null>(null);
    
    const router = useRouter(); //■tamura

    const handleClick = async () => {
        setLoading(false);

        axios.post (
            server, // pythonのURLを使用しています。
            {
            No: 値A,
            Date1: 値B,
            Title: 値C,
            timeout: 10000,
            }
        )
        .then((response) => {
            setStatus(response.data.data)
        })
        .catch((error) => {
            setError(error);
        })
    }

    return (
        <div>
            {/* クリック時にサーバーにデータを渡して該当するデータを受け取っています */}
            <button onClick={handleClick}>検索</button>
            <div>
                {loading ?
                    <div>ローディング中</div>:
                    (error ? <div>{error.message}</div> :
                        status?.length > 0 ? (
                            <div>
                                {status?.map((props:any, number:number) => {
                                    {/* サーバーから返ってきた「data10」という値の内容により、
                                    　　 データクリック時に遷移先を分岐させる */}
                                    const handleClickTrans = async () => {
                                    
                                        console.log("status[number] = " + status[number]); //■tamura
                                    
                                        if (props.data10 == 1) {
                                            router.push({
                                                pathname: `/support/state1_1`,
                                                query: {posts: status[number]}
                                            })
                                        }
                                        else if (props.data10 == 2) {
                                            router.push({
                                                pathname: `/support/state1_2`,
                                                query: {posts: status[number]}
                                            })
                                        }
                                    }

                                    return (
                                        <div key={number}>
                                            <div onClick={handleClickTrans}>
                                                <div>{status.値A}</div>
                                                <div>{status.値B}</div>
                                                <div>{status.値C}</div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        ):null)
            }
            </div>
        </div>
    )
}

export default Page
