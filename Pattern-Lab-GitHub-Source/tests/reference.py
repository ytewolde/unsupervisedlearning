import json,numpy as np,sklearn
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import silhouette_score
from sklearn.decomposition import PCA
X=np.array([[0.,0.],[0.,2.],[10.,10.],[10.,12.]])
m=KMeans(n_clusters=2,init=np.array([[0.,0.],[10.,10.]]),n_init=1,tol=1e-12,algorithm='lloyd').fit(X)
Y=np.array([[1,2,4],[2,1,3],[4,4,9],[6,7,12],[3,5,8]],float)
p=PCA(n_components=2,svd_solver='full').fit(Y)
out={'sklearn':sklearn.__version__,'centers':m.cluster_centers_.tolist(),'inertia':m.inertia_,'silhouette':silhouette_score(X,m.labels_),'scaled':StandardScaler().fit_transform(X).tolist(),'pcaX':Y.tolist(),'pcaVariance':p.explained_variance_ratio_.tolist(),'pcaDistances':((p.transform(Y)[:,None,:]-p.transform(Y)[None,:,:])**2).sum(2).tolist()}
json.dump(out,open('tests/reference.json','w'),indent=2)

Z=np.array([[1,2,4,0],[2,1,3,3],[4,4,9,1],[6,7,12,4],[3,5,8,7],[2,7,1,9]],float)
p3=PCA(n_components=3,svd_solver="full").fit(Z)
T=p3.transform(Z)
json.dump({"X":Z.tolist(),"variance":p3.explained_variance_ratio_.tolist(),"distances":((T[:,None,:]-T[None,:,:])**2).sum(2).tolist()},open("tests/reference3.json","w"),indent=2)
