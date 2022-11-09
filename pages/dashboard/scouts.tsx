import React, {ReactElement} from 'react';
import DashboardLayout from "../../components/layouts/dashboard/dashboardLayout/DashboardLayout";
import DashboardScouts from "../../components/layouts/dashboard/dashboardScouts/dashboardScouts/DashboardScouts";


const DashboardScoutsPage = () => {
    // const router = useRouter();
    // const [setUserObject] = useState<any>();
    // useEffect(() => {
    //     axios
    //         .get('http://localhost:5000/auth/getuser', {withCredentials: true})
    //         .then((res: AxiosResponse) => {
    //             if (res.data) {
    //                 setUserObject(res.data);
    //             } else {
    //                 router.push('http://localhost:3000/');
    //             }
    //         });
    // }, [router, setUserObject]);

    return (
        <>
            <DashboardScouts/>
        </>
    )


    // return (
    //     <Box
    //         sx={{
    //             marginTop: 8,
    //             display: 'flex',
    //             flexDirection: 'column',
    //             alignItems: 'center',
    //         }}
    //     >
    //         <Paper sx={{ p: 5, backgroundColor: 'lightblue' }}>
    //             <Button
    //                 variant={'contained'}
    //                 sx={{ m: 1 }}
    //                 onClick={() => {
    //                     axios.post(
    //                         'http://localhost:5000/auth/logout',
    //                         {},
    //                         { withCredentials: true }
    //                     );
    //                     router.push('http://localhost:3000/');
    //                 }}
    //             >
    //                 Logout
    //             </Button>
    //             {`Hello ${
    //                 userObject ? userObject.firstName + ' ' + userObject.lastName : ''
    //             }`}
    //         </Paper>
    //     </Box>
    // )}


}

DashboardScoutsPage.getLayout = function getLayout(page: ReactElement) {

    return (
        <div>
            <DashboardLayout>
                {page}
            </DashboardLayout>
        </div>
    )

}

export default DashboardScoutsPage;
