(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{RSIL:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return m}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("013z"),o=n("T0C+");n("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},l=s("PageDescription"),u=s("InlineNotification"),b={_frontmatter:c},p=r.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(p,i({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(l,{mdxType:"PageDescription"},Object(a.b)("p",null,"Overall process for installing a ",Object(a.b)(o.a,{name:"env",mdxType:"Globals"}))),Object(a.b)("h2",null,"Background"),Object(a.b)("p",null,"To understand how the process is performed, keep these concepts in mind."),Object(a.b)("h3",null,"Roles"),Object(a.b)("p",null,"A ",Object(a.b)(o.a,{name:"env",mdxType:"Globals"})," is installed and used by users acting in four roles:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Account owner"),": The user who owns the account"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Account managers"),": Account owner or other users with ",Object(a.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-account-services"}),"account management permissions")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Environment administrators"),": Users in the account with ",Object(a.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-userroles#platformroles"}),"permissions to create services in the environment’s resource group")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Environment users"),": Users in the account with ",Object(a.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-userroles#service_access_roles"}),"permissions to manage existing services in the environment’s resource group")," (e.g. developers, data scientists, etc.)")),Object(a.b)("p",null,"The account owner must create the access group for account managers (see below)."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Summary: The account owner will create an ",Object(a.b)("inlineCode",{parentName:"li"},"ACCOUNT-MGR")," access group using the ",Object(a.b)("inlineCode",{parentName:"li"},"acp-mgr")," script")),Object(a.b)("p",null,"Then, as described in ",Object(a.b)("a",i({parentName:"p"},{href:"/admin/config-account"}),"Configure Account"),", the account managers can set up the resource groups and access groups needed to install and use the environments."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Summary: For each environment, the account managers will:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Create a resource group"),Object(a.b)("li",{parentName:"ul"},"Create an access group named ",Object(a.b)("inlineCode",{parentName:"li"},"<resource_group>-ADMIN")," using the script ",Object(a.b)("inlineCode",{parentName:"li"},"acp-admin")),Object(a.b)("li",{parentName:"ul"},"Create an access group named ",Object(a.b)("inlineCode",{parentName:"li"},"<resource_group>-USER")," using the script ",Object(a.b)("inlineCode",{parentName:"li"},"acp-user"))))),Object(a.b)("h3",null,"Architecture"),Object(a.b)("p",null,Object(a.b)("a",i({parentName:"p"},{href:"/arch/environment"}),"Environment Architecture")," shows the structure of the ",Object(a.b)(o.a,{name:"env",mdxType:"Globals"})," that will be installed. Typically, each ",Object(a.b)("a",i({parentName:"p"},{href:"/arch/teams"}),"development team")," gets its own environment. However, multiple teams can share a single environment. The environment structure is designed to support best practices for a ",Object(a.b)("a",i({parentName:"p"},{href:"/arch/application"}),"cloud-native application architecture"),", including designing applications that are ",Object(a.b)("a",i({parentName:"p"},{href:"/arch/manageable"}),"built to manage"),"."),Object(a.b)("h2",null,"Access group for account managers"),Object(a.b)("p",null,"The account owner may want to delegate the responsibilities for configuring the account for all of the development teams that want environments. Those users who are delegated to will need account management permissions. An easy way to manage who has these permissions is to create an access group with those policies and add those users to the group. An account only needs one of these account manager access groups, which will be used to support all environments in the account."),Object(a.b)("p",null,"In a new account, the account owner is the only user. Even after inviting other users, the account owner is initially the only user with the account management permissions needed to grant those permissions to other users. Therefore it is the account owner who must create the access group for account managers."),Object(a.b)("p",null,"The account owner must create an access group to grant the necessary permissions for managing the account. Do this by running a script, or by using the console to manually perform the steps in the script. Also, add the account manager(s) to this group."),Object(a.b)("p",null,"To create the access group for the account managers:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a new ",Object(a.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-account_setup"}),"access group"),", name it something like ",Object(a.b)("inlineCode",{parentName:"li"},"ACCOUNT-MGR")," (all capital letters) (or name it after your account)"),Object(a.b)("li",{parentName:"ul"},"Run the script ",Object(a.b)("inlineCode",{parentName:"li"},"./terraform/scripts/acp-mgr <ACCESS_GROUP>"),", which will add the necessary policies to the access group",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"<ACCESS_GROUP>")," is the name of the access group (i.e. ",Object(a.b)("inlineCode",{parentName:"li"},"ACCOUNT-MGR"),")"))),Object(a.b)("li",{parentName:"ul"},"Add the account manager(s) to the group")),Object(a.b)("p",null,"The script adds policies that allow the user to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create resource groups"),Object(a.b)("li",{parentName:"ul"},"Invite users to the account"),Object(a.b)("li",{parentName:"ul"},"Create access groups")),Object(a.b)("p",null,"The script also adds the same policies that an environment administrator has. But whereas an environment administrator can only manage the resources in one resource group, an account manager can manage the resources in all resource groups. This gives the account manager the ability in any resource group to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create clusters"),Object(a.b)("li",{parentName:"ul"},"Manage the IBM Cloud Container Registry (used as the environment’s ",Object(a.b)("a",i({parentName:"li"},{href:"/guides/image-registry"}),"image registry"),")"),Object(a.b)("li",{parentName:"ul"},"Create service instances")),Object(a.b)("h2",null,"Process"),Object(a.b)("p",null,"The overall process:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Configure account — An account manager configures the account so that ",Object(a.b)(o.a,{name:"env",mdxType:"Globals"}),"s can be installed"),Object(a.b)("li",{parentName:"ol"},"Install environment — An environment administrator runs the ",Object(a.b)(o.a,{name:"shortName",mdxType:"Globals"})," scripts to create a ",Object(a.b)(o.a,{name:"env",mdxType:"Globals"})),Object(a.b)("li",{parentName:"ol"},"Configure environment — The environment administrator finishes setting up the newly installed ",Object(a.b)(o.a,{name:"env",mdxType:"Globals"}))),Object(a.b)("p",null,"Once the environment is set up, the environment users can start using it to develop applications."),Object(a.b)("h3",null,"Configure account"),Object(a.b)("p",null,"First, before installing an environment, an account manager needs to configure the IBM Cloud account for the\nenvironment. See ",Object(a.b)("a",i({parentName:"p"},{href:"/admin/config-account"}),"Configure Account")," for detailed instructions, which accomplish this:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Upgrade the image registry"),Object(a.b)("li",{parentName:"ol"},"Prepare to run scripts"),Object(a.b)("li",{parentName:"ol"},"Select a region and zone"),Object(a.b)("li",{parentName:"ol"},"Select a pair of public/private VLANs"),Object(a.b)("li",{parentName:"ol"},"Create a resource group"),Object(a.b)("li",{parentName:"ol"},"Create an access group for environment administrators"),Object(a.b)("li",{parentName:"ol"},"Create an access group for environment users"),Object(a.b)("li",{parentName:"ol"},"Optionally, create a cluster for the environment")),Object(a.b)("h3",null,"Install environment"),Object(a.b)("p",null,"Second, once the account manager has configured the account for installing an environment, the account manager and the environment administrator need to jointly decide how the environment administrator is going to install the environment. There are two options:"),Object(a.b)("p",null,Object(a.b)("a",i({parentName:"p"},{href:"/admin/installation-ibm-cloud"}),Object(a.b)("strong",{parentName:"a"},"Install including creating a new cluster")),": The environment administrator who performs this install needs permissions to create clusters as well as service instances. The script will run as this user to create the cluster, create the service instances, and install the CI/CD tools in the cluster."),Object(a.b)("p",null,Object(a.b)("a",i({parentName:"p"},{href:"/admin/installation-existing"}),Object(a.b)("strong",{parentName:"a"},"Install into an existing cluster")),": The account manager creates the cluster and then grants the environment administrator access to it. The environment administrator who performs this install needs permissions to create service instances but not to create clusters. The script will run as the environment administrator to create the service instances and install the CI/CD tools in the existing cluster."),Object(a.b)(u,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),": A third option is to ",Object(a.b)("a",i({parentName:"p"},{href:"/admin/installation-crc"}),"install an environment in Red Hat CodeReady Containers"),". For this option, you’re not installing in IBM Cloud, so you don’t have to configure your IBM Cloud account. However, you do have to install CRC.")),Object(a.b)("h3",null,"Configure environment"),Object(a.b)("p",null,"Third, after installing the environment, before giving the users access to the environment, the environment administrator needs to finish configuring it. See ",Object(a.b)("a",i({parentName:"p"},{href:"/admin/config-install"}),"Configure Environment")," for detailed instructions, which accomplish this:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Configure RBAC security in the cluster"),Object(a.b)("li",{parentName:"ul"},"Test opening the ",Object(a.b)(o.a,{name:"dashboard",mdxType:"Globals"})),Object(a.b)("li",{parentName:"ul"},"Complete setup of LogDNA"),Object(a.b)("li",{parentName:"ul"},"Complete setup of SysDig"),Object(a.b)("li",{parentName:"ul"},"Test the pipeline by deploying a first app"),Object(a.b)("li",{parentName:"ul"},"Complete setup of Artifactory"),Object(a.b)("li",{parentName:"ul"},"Complete setup of Argo CD"),Object(a.b)("li",{parentName:"ul"},"Rerun pipeline and confirm that the app’s Helm chart is added to Artifactory"),Object(a.b)("li",{parentName:"ul"},"Set up a GitOps repo to validate ArgoCD setup and configuration")),Object(a.b)("h2",null,"Conclusion"),Object(a.b)("p",null,"Having configured the account, installed the environment, and configured the environment, the administrators have now completed an end-to-end installation of a ",Object(a.b)(o.a,{name:"env",mdxType:"Globals"}),". It is ready for a development team to begin using for application development."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-plan-installation-index-mdx-323679daba30a3c63ccd.js.map