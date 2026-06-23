import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      <Navbar />

      <div style={styles.container}>

        <h1 style={styles.heading}>About MyApp</h1>

        <p style={styles.intro}>
          Welcome to MyApp! We are dedicated to creating simple,
          modern, and user-friendly web applications that help users
          learn, connect, and grow.
        </p>

        <div style={styles.cards}>

          <div style={styles.card}>
            <h2>🎯 Our Mission</h2>
            <p>
              To make technology accessible and enjoyable for everyone
              through innovative and interactive applications.
            </p>
          </div>

          <div style={styles.card}>
            <h2>💡 What We Do</h2>
            <p>
              We develop responsive websites, React applications,
              educational tools, and creative projects for learners.
            </p>
          </div>

          <div style={styles.card}>
            <h2>🚀 Our Vision</h2>
            <p>
              To inspire people to learn programming and build amazing
              projects that solve real-world problems.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

const styles = {

container:{
marginLeft:"240px",
padding:"40px",
minHeight:"100vh",
background:"linear-gradient(to right,#36d1dc,#5b86e5)"
},

heading:{
textAlign:"center",
fontSize:"40px",
color:"white"
},

intro:{
textAlign:"center",
fontSize:"20px",
color:"white",
maxWidth:"800px",
margin:"20px auto"
},

cards:{
display:"flex",
justifyContent:"space-around",
marginTop:"50px",
flexWrap:"wrap"
},

card:{
width:"280px",
background:"white",
padding:"25px",
borderRadius:"15px",
boxShadow:"0 4px 10px rgba(0,0,0,0.2)",
textAlign:"center",
margin:"10px"
}

};

export default About;