(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{zelW:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return m}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var r=n("7ljp"),a=n("013z"),i=n("T0C+");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},l=s("PageDescription"),b=s("InlineNotification"),u={_frontmatter:c},p=a.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(p,o({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l,{mdxType:"PageDescription"},Object(r.b)("p",null,"Set up the account so the environment can be installed")),Object(r.b)("h2",null,"Configure IBM Cloud account"),Object(r.b)("p",null,"The account must provide a few resources that will be needed to install and use the ",Object(r.b)(i.a,{name:"env",mdxType:"Globals"}),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A public/private pair of VLANs"),Object(r.b)("li",{parentName:"ul"},"A resource group"),Object(r.b)("li",{parentName:"ul"},"A pair of access groups for the admin and users")),Object(r.b)("p",null,"These will be created by an account manager, one of the roles described in ",Object(r.b)("a",o({parentName:"p"},{href:"/admin/plan-installation"}),"Plan Installation"),". These are the steps an account manager should perform to configure the account."),Object(r.b)("h3",null,"Upgrade the image registry"),Object(r.b)("p",null,"First, we’ll upgrade the service plan for the ",Object(r.b)("a",o({parentName:"p"},{href:"/guides/image-registry"}),"image registry")," so that is has more capacity."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Set the registry plan"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",o({parentName:"pre"},{className:"language-bash"}),"ibmcloud cr plan-upgrade standard\n")))),Object(r.b)("p",null,"Now we can store more container images."),Object(r.b)("h3",null,"Prepare to run scripts"),Object(r.b)("p",null,"Second, we’ll use some scripts in the steps below to help create access groups. Here, we’ll download the scripts and prepare to run them. (If you want to use the console to manually configure the access groups, you can skip this step.)"),Object(r.b)("p",null,"Clone the Git repository with the scripts. (This repo also has the scripts for installing the ",Object(r.b)(i.a,{name:"env",mdxType:"Globals"}),".)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Clone the ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero"}),"ibm-garage-iteration-zero")," Git repository to your local filesystem"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",o({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:ibm-garage-cloud/ibm-garage-iteration-zero.git\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Switch to the cloned directory"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",o({parentName:"pre"},{className:"language-bash"}),"cd ibm-garage-iteration-zero\n")))),Object(r.b)("p",null,"The scripts need you to log into IBM Cloud first. In the terminal you’ll use to run the scripts, log in to IBM Cloud."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Log in to the IBM Cloud CLI",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",o({parentName:"pre"},{className:"language-bash"}),"ibmcloud login -a cloud.ibm.com -r <region> -g <resource-group>\n")))),Object(r.b)("h3",null,"Data center"),Object(r.b)("p",null,"Third, decide which ",Object(r.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/docs/overview?topic=overview-zero-downtime#ov_intro_reg",title:"Locations for resource deployment"}),"IBM Cloud location")," will host the ",Object(r.b)(i.a,{name:"env",mdxType:"Globals"}),". That will be specified with two settings:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Region — A geography such as ",Object(r.b)("em",{parentName:"li"},"us-south")," or ",Object(r.b)("em",{parentName:"li"},"eu-gb")),Object(r.b)("li",{parentName:"ul"},"Zone — A ",Object(r.b)("a",o({parentName:"li"},{href:"https://cloud.ibm.com/docs/overview?topic=overview-zero-downtime#data_center"}),"data center")," in the region such as ",Object(r.b)("em",{parentName:"li"},"dal10")," or ",Object(r.b)("em",{parentName:"li"},"lon02"))),Object(r.b)("h3",null,"Public and private VLANs"),Object(r.b)("p",null,"Fourth, create or provide a pair of public and private VLANs for the selected region and zone. These VLANs will implement the public and private networks in the Kubernetes or OpenShift cluster."),Object(r.b)(b,{mdxType:"InlineNotification"},Object(r.b)("p",null,"Note: If your account already has a pair of VLANs for your desired region and zone, you can use those.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Use the ",Object(r.b)("a",o({parentName:"li"},{href:"/getting-started/cli"}),"IGC CLI"),"’s ",Object(r.b)("inlineCode",{parentName:"li"},"igc vlan")," command to select two existing VLANs and generate the properties to use for the installation scripts")),Object(r.b)("p",null,"These links help explain how to find the VLANs an account has, create more, and how a cluster uses them to implement its network."),Object(r.b)("p",null,"Use the console to manage VLANs:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"List existing VLANs: ",Object(r.b)("a",o({parentName:"li"},{href:"https://cloud.ibm.com/classic/network/vlans"}),"Resources > Classic Infrastructure > IP Management > VLANs")),Object(r.b)("li",{parentName:"ul"},"Create a VLAN: ",Object(r.b)("a",o({parentName:"li"},{href:"https://cloud.ibm.com/catalog/infrastructure/vlan"}),"Catalog > Services > Networking > VLAN"))),Object(r.b)("p",null,"Read the docs on using VLANs:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://cloud.ibm.com/docs/infrastructure/vlans"}),"Getting started with VLANs")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-plan_clusters#plan_basics"}),"Understanding network basics of classic clusters")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-subnets#basics"}),"Overview of classic networking in IBM Cloud Kubernetes Service"))),Object(r.b)("h3",null,"Resource group"),Object(r.b)("p",null,"Fifth, create or provide a ",Object(r.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/docs/resources?topic=resources-rgs"}),"resource group"),". This resource group will control access to the environment’s cluster and service instances. This resource group should typically be named after the development team, its project, or the application it is implementing."),Object(r.b)(b,{kind:"warning",mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Warning"),": ",Object(r.b)("strong",{parentName:"p"},"The resource group name should be 24 characters or fewer, and should conform to ",Object(r.b)("a",o({parentName:"strong"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names"}),"Kubernetes resource naming conventions")),"—the name should be all lowercase letters, digits, and the separators should be dashes. (The ",Object(r.b)(i.a,{name:"shortName",mdxType:"Globals"})," installation scripts will name the cluster ",Object(r.b)("inlineCode",{parentName:"p"},"<resource-group>-cluster"),", and a cluster name is limited to 32 characters.)")),Object(r.b)("p",null,"We give our resource groups names like ",Object(r.b)("inlineCode",{parentName:"p"},"mooc-team-one"),", ",Object(r.b)("inlineCode",{parentName:"p"},"garage-dev-tools"),", ",Object(r.b)("inlineCode",{parentName:"p"},"gct-showcase"),", etc."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://cloud.ibm.com/account/resource-groups"}),"Create the resource group"))),Object(r.b)("p",null,"To create clusters in the resource group, the account will need API keys for the container service to create resources in the classic infrastructure. A separate API key is needed for each region and resource group. ",Object(r.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-access_reference#infra"}),"Classic infrastructure roles")," explains the classic infrastructure permissions the cluster service needs. This key grants these permissions to the cluster service, so that any user with permissions to create a cluster can do so without requiring any classic infrastructure permissions."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create an API key for the resource group and the data center’s region",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Perform these steps to create an API key: ",Object(r.b)("a",o({parentName:"li"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-users#api_key"}),"Setting up the API key to enable access to the infrastructure portfolio")),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("a",o({parentName:"li"},{href:"https://cloud.ibm.com/iam/apikeys"}),"list of existing API keys")," shows the new key named ",Object(r.b)("inlineCode",{parentName:"li"},"containers-kubernetes-key"))))),Object(r.b)("h3",null,"Access group for environment administrators"),Object(r.b)("p",null,"Sixth, create an access group to grant the necessary permissions for installing a ",Object(r.b)(i.a,{name:"env",mdxType:"Globals"}),". Do this by running a script, or by using the console to manually perform the steps in the script. Also, add the environment administrator(s) (who is the user who will run the scripts to create the environment) to this group."),Object(r.b)("p",null,"To create the access group for the environment administrators:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a new ",Object(r.b)("a",o({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-account_setup"}),"access group"),", name it something like ",Object(r.b)("inlineCode",{parentName:"li"},"<resource_group>-ADMIN")," (all capital letters)"),Object(r.b)("li",{parentName:"ul"},"Run the script ",Object(r.b)("inlineCode",{parentName:"li"},"./terraform/scripts/acp-admin <ACCESS_GROUP> <RESOURCE_GROUP>"),", which will add the necessary policies to the access group",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<ACCESS_GROUP>")," is the name of the access group (i.e. ",Object(r.b)("inlineCode",{parentName:"li"},"<resource_group>-ADMIN"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<RESOURCE_GROUP>")," is the name of the resource group (i.e. ",Object(r.b)("inlineCode",{parentName:"li"},"<resource_group>"),")"))),Object(r.b)("li",{parentName:"ul"},"Add the environment administrator(s) to the group")),Object(r.b)("p",null,"The script adds policies that allow the user to add resources to the resource group:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Permission to create clusters"),Object(r.b)("li",{parentName:"ul"},"Permission to manage the IBM Cloud Container Registry (used as the environment’s ",Object(r.b)("a",o({parentName:"li"},{href:"/guides/image-registry"}),"image registry"),")"),Object(r.b)("li",{parentName:"ul"},"Permission to create service instances")),Object(r.b)("h3",null,"Access group for environment users"),Object(r.b)("p",null,"Seventh, create an access group to enable users (e.g. developers, data scientists, etc.) to access the resources in the ",Object(r.b)(i.a,{name:"env",mdxType:"Globals"}),". This can be done later, after the environment is created, either by running a script or using the console. Also, add the users who will use the environment (e.g. developers, etc.) to this group."),Object(r.b)("p",null,"To create the access group for the environment users:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a new ",Object(r.b)("a",o({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-account_setup"}),"access group"),", name it something like ",Object(r.b)("inlineCode",{parentName:"li"},"<resource_group>-USER")," (all capital letters)"),Object(r.b)("li",{parentName:"ul"},"Run the script ",Object(r.b)("inlineCode",{parentName:"li"},"./terraform/scripts/acp-user <ACCESS_GROUP> <RESOURCE_GROUP> <REGION>"),", which will add the necessary policies to the access group",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<ACCESS_GROUP>")," is the name of the access group (i.e. ",Object(r.b)("inlineCode",{parentName:"li"},"<resource_group>-USER"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<RESOURCE_GROUP>")," is the name of the resource group (i.e. ",Object(r.b)("inlineCode",{parentName:"li"},"<resource_group>"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<REGION>")," is the name of the region the data center is in"))),Object(r.b)("li",{parentName:"ul"},"Add the users to the group")),Object(r.b)("p",null,"The script adds policies that allow the user to use resources to the resource group:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Access to the resource group"),Object(r.b)("li",{parentName:"ul"},"Access to the cluster"),Object(r.b)("li",{parentName:"ul"},"Access to the image registry"),Object(r.b)("li",{parentName:"ul"},"Access to each of the services in the resource group")),Object(r.b)("h3",null,"Cluster for the environment (optional)"),Object(r.b)("p",null,"Eighth, if the environment administrator will install the environment including creating a new cluster, then skip this step. However, if the environment administrator will install the environment into an existing cluster, then the account manager must create the cluster for the environment administrator."),Object(r.b)("p",null,"Create the cluster that the environment will be installed into. Create either a Kubernetes cluster or Red Hat OpenShift cluster as needed. A typical cluster size is single zone, 3 nodes, each 8 vCPUs 32GB RAM."),Object(r.b)("p",null,"To configure RBAC security in the cluster:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Run the RBAC script ",Object(r.b)("inlineCode",{parentName:"li"},"./terraform/scripts/rbac.sh <ACCESS-GROUP>"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<ACCESS-GROUP>")," is the name of the admin group (i.e. ",Object(r.b)("inlineCode",{parentName:"li"},"<resource_group>-ADMIN"),")")))),Object(r.b)("h2",null,"Configuration settings"),Object(r.b)("p",null,"The account manager needs to pass the following values about the account configuration to the environment administrator:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The region for the environment"),Object(r.b)("li",{parentName:"ul"},"The resource group for the environment"),Object(r.b)("li",{parentName:"ul"},"Whether the environment will use an existing an existing PostgreSQL service instance that is already bound to the cluster")),Object(r.b)("p",null,"If the cluster already exists:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Cluster type (Kubernetes or Red Hat OpenShift)"),Object(r.b)("li",{parentName:"ul"},"Cluster name")),Object(r.b)("p",null,"If the environment administrator will create the cluster:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For the public/private VLAN pair: the region, data center, and VLAN IDs")),Object(r.b)("h2",null,"Conclusion"),Object(r.b)("p",null,"The account manager has now configured the account so that the environment administrator can install the environment, and has passed the configuration settings to the environment administrator."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-config-account-index-mdx-456e6dc492ef327ec5a6.js.map