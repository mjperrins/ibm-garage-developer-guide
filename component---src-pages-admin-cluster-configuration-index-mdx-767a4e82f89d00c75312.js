(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{o5Rx:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return u}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("013z");n("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i,o={},c=(i="PageDescription",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),s={_frontmatter:o},b=r.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(b,l({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c,{mdxType:"PageDescription"},Object(a.b)("p",null,"Within the created Kubernetes or OpenShift cluster there are a number secrets\nand config maps that are either provided by the IBM Cloud public environment and\nutilized by the Terraform scripts or are created during the Terraform provisioning\nprocess.")),Object(a.b)("h2",null,"Namespaces"),Object(a.b)("p",null,"The Iteration Zero scripts create four namespaces that are used by the components deployed into the cluster: ",Object(a.b)("inlineCode",{parentName:"p"},"tools"),",\n",Object(a.b)("inlineCode",{parentName:"p"},"dev"),", ",Object(a.b)("inlineCode",{parentName:"p"},"test"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"staging"),". The actual names used for the namespaces are provided in Terraform variables with the\ndefaults being those listed. The variables are then passed into the namespaces module in ",Object(a.b)("inlineCode",{parentName:"p"},"stage1-namespaces.tf"),"."),Object(a.b)("h2",null,"Provided resources"),Object(a.b)("h3",null,"TLS secret"),Object(a.b)("p",null,"When the cluster is created, a secret containing the TLS certs for the ingress subdomain is provided in the\n",Object(a.b)("inlineCode",{parentName:"p"},"default")," namespace. The the name of the secret is based off of the cluster name with some rules applied to limit the\nlength and replace disallowed characters."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," To avoid issues with the naming conventions for the secret, the Iteration Zero scripts look for the secret\nthat has a ",Object(a.b)("inlineCode",{parentName:"p"},"tls.key")," value: ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl get secrets -o jsonpath='{.items[?(@.data.tls\\.key != \"\")].metadata.name}'"),".\nIdeally this would be identified using a label and a selector…"),Object(a.b)("p",null,"During the Iteration Zero process, the TLS secret is copied into each of the four namespaces created and used by the\nIteration Zero processes."),Object(a.b)("h3",null,"Pull secrets"),Object(a.b)("p",null,"Pull secrets for the IBM Cloud Image Registry are generated in the cluster as part of the Iteration Zero process to\nprepare the namespaces. The secrets are initially created in the ",Object(a.b)("inlineCode",{parentName:"p"},"default")," namespace with the following names:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"default-icr-io")," "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"default-{region}-icr-io")," ")),Object(a.b)("p",null,"During the namespace preparation process, the pull secrets are copied into the different namespaces with ",Object(a.b)("inlineCode",{parentName:"p"},"default-"),"\nprefix dropped. E.g."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"icr-io")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"{region}-icr-io"))),Object(a.b)("p",null,"The pull secrets are also added to the ",Object(a.b)("inlineCode",{parentName:"p"},"default")," service account in each of the namespaces. As a result, it is not\nnecessary to directly reference the pull secret as long as the pod runs under the default service account."),Object(a.b)("h2",null,"Created resources"),Object(a.b)("p",null,"The following resources are all created during the Iteration Zero provisioning process. These resources\nare used generally to expose the config of the installed tools but specifically used by the CI pipeline (",Object(a.b)("a",l({parentName:"p"},{href:"/guides/continuous-integration"}),"Jenkins"),", ",Object(a.b)("a",l({parentName:"p"},{href:"/guides/continuous-integration-tekton"}),"Tekton"),", etc.) to interact with the deployed tools. The resources are bound as optional environment variables\nin the containers used within the pipeline so if a particular tool has not been installed the\nassociated environment variables won’t be set. For example:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-yaml"}),"  envFrom:\n    - configMapRef:\n        name: pactbroker-config\n        optional: true\n    - configMapRef:\n        name: sonarqube-config\n        optional: true\n    - secretRef:\n        name: sonarqube-access\n        optional: true\n")),Object(a.b)("h3",null,"IBM Cloud config"),Object(a.b)("p",null,"The Iteration Zero script creates a config map and secret named ",Object(a.b)("inlineCode",{parentName:"p"},"ibmcloud-config")," and ",Object(a.b)("inlineCode",{parentName:"p"},"ibmcloud-access"),"\nin the ",Object(a.b)("inlineCode",{parentName:"p"},"default")," namespace that contains the relevant configuration values for the cluster within the IBM\nCloud account. The config map and secret are copied into each of the Iteration Zero namespaces as the\nnamespaces are created."),Object(a.b)("h4",null,Object(a.b)("inlineCode",{parentName:"h4"},"ibmcloud-config")," config map"),Object(a.b)("p",null,"The following values are collected:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"CLUSTER_TYPE - the type of cluster (kubernetes or openshift)"),Object(a.b)("li",{parentName:"ul"},"APIURL - the api url used to connect to the IBM Cloud environment"),Object(a.b)("li",{parentName:"ul"},"SERVER_URL - the server url used to connect to the cluster, particularly for OpenShift"),Object(a.b)("li",{parentName:"ul"},"RESOURCE_GROUP - the IBM Cloud resource group where the cluster has been installed"),Object(a.b)("li",{parentName:"ul"},"REGISTRY_URL - the url to the image registry"),Object(a.b)("li",{parentName:"ul"},"REGISTRY_NAMESPACE - the namespace within the image registry where images will be stored"),Object(a.b)("li",{parentName:"ul"},"REGION - the IBM Cloud region where where the cluster has been installed"),Object(a.b)("li",{parentName:"ul"},"CLUSTER_NAME - the name of the cluster"),Object(a.b)("li",{parentName:"ul"},"INGRESS_SUBDOMAIN - the subdomain for the cluster to use in building ingress urls"),Object(a.b)("li",{parentName:"ul"},"TLS_SECRET_NAME - the name of the secret that contains the TLS certificate information")),Object(a.b)("h4",null,Object(a.b)("inlineCode",{parentName:"h4"},"ibmcloud-access")," secret"),Object(a.b)("p",null,"The following values are collected:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"APIKEY - the IBM Cloud apikey used to access the environment")),Object(a.b)("h3",null,"ArgoCD config"),Object(a.b)("h4",null,Object(a.b)("inlineCode",{parentName:"h4"},"argocd-config")," config map"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ARGOCD_URL - the url of the ArgoCD ingress")),Object(a.b)("h4",null,Object(a.b)("inlineCode",{parentName:"h4"},"argocd-access")," secret"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ARGOCD_PASSWORD - the password for the argocd user"),Object(a.b)("li",{parentName:"ul"},"ARGOCD_USER - the user id of the argocd user")),Object(a.b)("h3",null,"Artifactory config"),Object(a.b)("h4",null,Object(a.b)("inlineCode",{parentName:"h4"},"artifactory-config")," config map"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ARTIFACTORY_URL - the url for the Artifactory ingress")),Object(a.b)("h4",null,Object(a.b)("inlineCode",{parentName:"h4"},"artifactory-access")," config map"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ARTIFACTORY_USER - the user name of the admin user"),Object(a.b)("li",{parentName:"ul"},"ARTIFACTORY_PASSWORD - the password for the admin user"),Object(a.b)("li",{parentName:"ul"},"ARTIFACTORY_ENCRPT - the encrypted password for the admin user. This value is initially blank\nand must be updated after the value is generated in the UI"),Object(a.b)("li",{parentName:"ul"},"ARTIFACTORY_ADMIN_ACCESS_USER - the admin access user"),Object(a.b)("li",{parentName:"ul"},"ARTIFACTORY_ADMIN_ACCESS_PASSWORD - the admin access password")),Object(a.b)("h3",null,"Jenkins config"),Object(a.b)("h4",null,Object(a.b)("inlineCode",{parentName:"h4"},"jenkins-config")," config map"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"JENKINS_HOST - the host name of the Jenkins ingress"),Object(a.b)("li",{parentName:"ul"},"JENKINS_URL - the url of the Jenkins ingress")),Object(a.b)("h4",null,Object(a.b)("inlineCode",{parentName:"h4"},"jenkins-access")," secret"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"api_token - the Jenkins api token"),Object(a.b)("li",{parentName:"ul"},"host - the host name of the Jenkins ingress"),Object(a.b)("li",{parentName:"ul"},"url - the url of the Jenkins ingress"),Object(a.b)("li",{parentName:"ul"},"username - the Jenkins user name"),Object(a.b)("li",{parentName:"ul"},"password - the Jenkins password")),Object(a.b)("h3",null,"PactBroker config"),Object(a.b)("h4",null,Object(a.b)("inlineCode",{parentName:"h4"},"pactbroker-config")," config map"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"PACTBROKER_URL - the url of the Pact Broker ingress")),Object(a.b)("h3",null,"SonarQube config"),Object(a.b)("h4",null,Object(a.b)("inlineCode",{parentName:"h4"},"sonarqube-config")," config map"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"SONARQUBE_URL - the url of the SonarQube ingress")),Object(a.b)("h4",null,Object(a.b)("inlineCode",{parentName:"h4"},"sonarqube-access")," secret"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"SONARQUBE_USER - the user name of the SonarQube user"),Object(a.b)("li",{parentName:"ul"},"SONARQUBE_PASSWORD - the password of the SonarQube user")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-cluster-configuration-index-mdx-767a4e82f89d00c75312.js.map